import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import * as cheerio from 'cheerio'
import type { Element } from 'domhandler'
import { degrees } from '../src/data/programs'
import type { Course } from '../src/types/course'
import type { Program, ProgramCategory, ProgramRequirement } from '../src/types/program'
import { parseAcademicCalendarRequirementHtml } from './academicCalendarRequirements'

const catalogId = '67e557ed6ed2fe2bd3a38956'
const catalogBaseUrl = 'https://uwaterloocm.kuali.co/api/v1/catalog'
const catalogPageUrl = 'https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog'
const mathFacultyName = 'Faculty of Mathematics'
const targetCourseSubjects = new Set(['AMATH', 'CO', 'CS', 'MATH'])

type KualiProgramSummary = {
  id: string
  pid: string
  title: string
  code?: string
}

type KualiProgramDetail = KualiProgramSummary & {
  additionalConstraints?: string
  courseRequirementsNoUnits?: string
  facultyCalendarDisplay?: {
    name?: string
  }
  undergraduateCredentialType?: {
    name?: string
  }
  requirements?: string
  specializationIsAvailableForStudentsInTheFollowingMajorsRules?: string
}

type KualiCourseSummary = {
  __catalogCourseId: string
  id: string
  title: string
  subjectCode?: {
    name?: string
  }
}

type KualiCourseDetail = {
  antirequisites?: string
  description?: string
  prerequisites?: string
  subjectCode?: {
    name?: string
  }
  title?: string
}

type CourseLink = {
  code: string
  courseId: string
  name: string
}

type ImportStats = {
  missingCourseDetails: string[]
  programRequirementsWithoutCourses: Array<{ programTitle: string; text: string }>
  skippedConditions: Array<{ courseCode: string; conditions: string[] }>
  unknownProgramCategories: Array<{ code?: string; credentialType?: string; title: string }>
}

function createImportStats(): ImportStats {
  return {
    missingCourseDetails: [],
    programRequirementsWithoutCourses: [],
    skippedConditions: [],
    unknownProgramCategories: [],
  }
}

function recordSkippedCondition(stats: ImportStats, courseCode: string, conditions: string[]) {
  if (conditions.length === 0) {
    return
  }

  stats.skippedConditions.push({ courseCode, conditions })
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

async function mapWithConcurrency<T, U>(
  items: T[],
  concurrency: number,
  mapper: (item: T) => Promise<U>,
): Promise<U[]> {
  const results: U[] = []
  let nextIndex = 0

  async function worker() {
    for (;;) {
      const index = nextIndex
      nextIndex += 1

      if (index >= items.length) {
        return
      }

      results[index] = await mapper(items[index])
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  )

  return results
}

function stripHtml(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  const text = cheerio.load(value).text().replace(/\s+/g, ' ').trim()

  return text.length > 0 ? text : undefined
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getUniqueId(baseId: string, usedIds: Set<string>): string {
  const normalizedBaseId = baseId || 'item'
  let id = normalizedBaseId
  let suffix = 2

  while (usedIds.has(id)) {
    id = `${normalizedBaseId}-${suffix}`
    suffix += 1
  }

  usedIds.add(id)

  return id
}

function normalizeCourseCode(value: string): string {
  return value.replace(/\s+/g, '').toUpperCase()
}

function getCourseSubject(code: string): string {
  return code.match(/^[A-Z]+/)?.[0] ?? code
}

function getCourseLevel(code: string): number {
  return Number(code.match(/\d/)?.[0] ?? 0) * 100
}

export function getProgramCategory(
  program: KualiProgramDetail,
  stats?: ImportStats,
): ProgramCategory {
  const credentialType = program.undergraduateCredentialType?.name
  const code = program.code ?? ''
  const title = program.title

  if (credentialType === 'Minor') {
    return 'minor'
  }

  if (credentialType === 'Specialization') {
    return 'specialization'
  }

  if (credentialType === 'Option') {
    return 'option'
  }

  if (credentialType === 'Degree Requirements' || code.startsWith('Degree Reqs:')) {
    return 'degree-requirement'
  }

  if (code.startsWith('JH-') || title.includes('Joint Honours')) {
    return 'joint'
  }

  if (title.includes('Double Degree') || code.includes('Double Degree')) {
    return 'double-degree'
  }

  if (stats && credentialType !== 'Major') {
    stats.unknownProgramCategories.push({
      code: program.code,
      credentialType,
      title,
    })
  }

  return 'major'
}

function getDegreeIds(program: KualiProgramDetail): string[] | undefined {
  const text = `${program.title} ${program.code ?? ''}`
  const degreeIds: string[] = []

  if (text.includes('Bachelor of Mathematics') || text.includes('BMath')) {
    degreeIds.push('bmath')
  }

  if (text.includes('Bachelor of Computer Science') || text.includes('BCS')) {
    degreeIds.push('bcs')
  }

  return degreeIds.length > 0 ? degreeIds : undefined
}

function getRequiredCount(text: string): number | undefined {
  const normalized = text.replace(/\s+/g, ' ')
  const completeMatch = normalized.match(/Complete\s+(\d+)\s+of\s+the\s+following/i)
  const atLeastMatch = normalized.match(/at\s+least\s+(\d+)\s+of\s+the\s+following/i)

  return Number(completeMatch?.[1] ?? atLeastMatch?.[1]) || undefined
}

function getRequirementType(text: string): Pick<ProgramRequirement, 'requiredCount' | 'type'> {
  const requiredCount = getRequiredCount(text)

  if (requiredCount) {
    return {
      type: 'chooseN',
      requiredCount,
    }
  }

  return {
    type: 'allOf',
  }
}

function parseCourseLinksFromNode($: cheerio.CheerioAPI, node: Element): CourseLink[] {
  const links = new Map<string, CourseLink>()

  $(node)
    .find('a[href*="#/courses/view/"]')
    .each((_, link) => {
      const href = $(link).attr('href') ?? ''
      const courseId = href.match(/courses\/view\/([a-f0-9]+)/i)?.[1]
      const code = normalizeCourseCode($(link).text())
      const name = $(link)
        .parent()
        .text()
        .replace(/\([^)]*\)/g, ' ')
        .replace(code, ' ')
        .replace(/\s+-\s+/, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      if (courseId && code) {
        links.set(code, {
          code,
          courseId,
          name,
        })
      }
    })

  return [...links.values()]
}

function getCourseLinksFromHtml(value: string | undefined): CourseLink[] {
  if (!value) {
    return []
  }

  const $ = cheerio.load(value)
  const links = new Map<string, CourseLink>()

  $('a[href*="#/courses/view/"]').each((_, link) => {
    const href = $(link).attr('href') ?? ''
    const courseId = href.match(/courses\/view\/([a-f0-9]+)/i)?.[1]
    const code = normalizeCourseCode($(link).text())
    const name = $(link)
      .parent()
      .text()
      .replace(/\([^)]*\)/g, ' ')
      .replace(code, ' ')
      .replace(/\s+-\s+/, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    if (courseId && code) {
      links.set(code, { code, courseId, name })
    }
  })

  return [...links.values()]
}

function getCourseCodesFromHtml(value: string | undefined): string[] | undefined {
  if (!value) {
    return undefined
  }

  const codes = new Set(getCourseLinksFromHtml(value).map((link) => link.code))
  const rawText = stripHtml(value) ?? ''

  rawText.match(/\b[A-Z]{2,8}\s*\d{2,3}[A-Z]?\b/g)?.forEach((code) => {
    codes.add(normalizeCourseCode(code))
  })

  return codes.size > 0 ? [...codes].sort() : undefined
}

function parseProgramCodes(value: string | undefined): string[] | undefined {
  if (!value) {
    return undefined
  }

  const $ = cheerio.load(value)
  const codes = new Set<string>()

  $('a[href*="#/programs/view/"]').each((_, link) => {
    const code = $(link).text().replace(/\s+/g, ' ').trim()

    if (code) {
      codes.add(code)
    }
  })

  return codes.size > 0 ? [...codes] : undefined
}

function getNodeText(node: cheerio.Cheerio<Element>): string {
  return node.text().replace(/\s+/g, ' ').trim()
}

function getUniqueCourseLinks(courses: CourseLink[]): CourseLink[] {
  return [...new Map(courses.map((course) => [course.code, course])).values()]
}

function isCompletionGroup(label: string): boolean {
  return /Complete\s+(all|\d+)/i.test(label)
}

function buildProgramRequirementFromCourses(
  courses: CourseLink[],
  rawName: string,
  programId: string,
  requirements: ProgramRequirement[],
  requirementIds: Set<string>,
  notes?: string[],
): ProgramRequirement {
  const uniqueCourses = getUniqueCourseLinks(courses)
  const requirementShape = getRequirementType(rawName)
  const baseId = `${programId}-${requirements.length + 1}-${slugify(rawName).slice(0, 70)}`
  const id = getUniqueId(baseId, requirementIds)
  const requiredCount =
    requirementShape.type === 'chooseN' ?
      Math.min(requirementShape.requiredCount ?? uniqueCourses.length, uniqueCourses.length)
    : undefined

  return {
    id,
    name: rawName.slice(0, 180),
    category: 'program',
    courses: uniqueCourses.map((course) => course.code),
    ...(notes && notes.length > 0 ? { notes } : {}),
    ...(requirementShape.type === 'chooseN' ? { type: 'chooseN', requiredCount } : requirementShape),
  }
}

function getProgramRequirementNodes($: cheerio.CheerioAPI): Element[] {
  const resultNodes = $('li[data-test^="ruleView-"]').toArray()
  const groupedNodes = $('li')
    .toArray()
    .filter((node) => {
      const item = $(node)
      const label = item.children('span').first().text().replace(/\s+/g, ' ').trim()

      return isCompletionGroup(label) && parseCourseLinksFromNode($, node).length > 0
    })

  if (groupedNodes.length > 0) {
    const groupedDescendants = new Set<Element>(
      groupedNodes.flatMap((node) =>
        $(node).find('li[data-test^="ruleView-"]').toArray() as Element[],
      ),
    )

    return [
      ...groupedNodes,
      ...resultNodes.filter((node) => !groupedDescendants.has(node)),
    ]
  }

  return resultNodes
}

export function parseRequirements(
  program: KualiProgramDetail,
  courseLinksByCode: Map<string, CourseLink>,
  programId: string,
  stats?: ImportStats,
): ProgramRequirement[] {
  const html = program.courseRequirementsNoUnits ?? program.requirements

  if (!html) {
    return []
  }

  const $ = cheerio.load(html)
  const requirements: ProgramRequirement[] = []
  const requirementIds = new Set<string>()

  getProgramRequirementNodes($).forEach((node) => {
    const item = $(node)
    const courses = parseCourseLinksFromNode($, node)
    const result = item.children('div[data-test$="-result"]').first()
    const groupLabel = item.children('span').first().text().replace(/\s+/g, ' ').trim()
    const rawName = getNodeText(result.length > 0 ? result : item.children('span').first())
    const name = rawName || groupLabel || getNodeText(item)

    if (courses.length === 0) {
      if (stats) {
        stats.programRequirementsWithoutCourses.push({
          programTitle: program.title,
          text: name,
        })
      }
      return
    }

    courses.forEach((course) => courseLinksByCode.set(course.code, course))

    requirements.push(
      buildProgramRequirementFromCourses(
        courses,
        name,
        programId,
        requirements,
        requirementIds,
        courses.length === getUniqueCourseLinks(courses).length ?
          undefined
        : ['Duplicate course links were collapsed during import.'],
      ),
    )
  })

  return requirements
}

function buildProgram(
  program: KualiProgramDetail,
  courseLinksByCode: Map<string, CourseLink>,
  id: string,
  stats: ImportStats,
): Program {
  const sourceUrl = `${catalogPageUrl}#/programs/${program.pid}`

  return {
    id,
    name: program.title,
    degreeIds: getDegreeIds(program),
    category: getProgramCategory(program, stats),
    code: program.code,
    credentialType: program.undergraduateCredentialType?.name,
    faculty: program.facultyCalendarDisplay?.name,
    sourcePid: program.pid,
    sourceId: program.id,
    sourceUrl,
    parentProgramCodes: parseProgramCodes(program.specializationIsAvailableForStudentsInTheFollowingMajorsRules),
    requirements: parseRequirements(program, courseLinksByCode, id, stats),
  }
}

function buildCourseFromLink(link: CourseLink, detail: KualiCourseDetail | undefined, stats: ImportStats): Course {
  const antirequisites = getCourseCodesFromHtml(detail?.antirequisites)?.filter(
    (courseCode) => courseCode !== link.code,
  )
  const parsedPrerequisite = parseAcademicCalendarRequirementHtml(detail?.prerequisites)

  recordSkippedCondition(stats, link.code, parsedPrerequisite.nonCourseConditions)

  return {
    code: link.code,
    name: detail?.title ?? link.name,
    subject: detail?.subjectCode?.name ?? getCourseSubject(link.code),
    level: getCourseLevel(link.code),
    description: detail?.description,
    prerequisiteRawText: stripHtml(detail?.prerequisites),
    prerequisiteNotes:
      parsedPrerequisite.nonCourseConditions.length > 0 ?
        parsedPrerequisite.nonCourseConditions
      : undefined,
    prerequisite: parsedPrerequisite.prerequisite,
    antirequisiteRawText: stripHtml(detail?.antirequisites),
    antirequisites: antirequisites && antirequisites.length > 0 ? antirequisites : undefined,
  }
}

function formatTsValue(value: unknown): string {
  return JSON.stringify(value, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '"')
}

function printImportStats(stats: ImportStats) {
  const skippedConditionCount = stats.skippedConditions.reduce(
    (total, item) => total + item.conditions.length,
    0,
  )

  if (
    stats.missingCourseDetails.length === 0 &&
    stats.programRequirementsWithoutCourses.length === 0 &&
    skippedConditionCount === 0 &&
    stats.unknownProgramCategories.length === 0
  ) {
    return
  }

  console.warn('Import warnings:')

  if (stats.missingCourseDetails.length > 0) {
    console.warn(`- Missing detail fetches: ${stats.missingCourseDetails.length}`)
    stats.missingCourseDetails.slice(0, 10).forEach((courseCode) => console.warn(`  - ${courseCode}`))
  }

  if (skippedConditionCount > 0) {
    console.warn(`- Non-course prerequisite conditions preserved as notes: ${skippedConditionCount}`)
    stats.skippedConditions.slice(0, 10).forEach((item) => {
      console.warn(`  - ${item.courseCode}: ${item.conditions.join(' | ')}`)
    })
  }

  if (stats.programRequirementsWithoutCourses.length > 0) {
    console.warn(
      `- Program requirement rules without detected courses: ${stats.programRequirementsWithoutCourses.length}`,
    )
    stats.programRequirementsWithoutCourses.slice(0, 10).forEach((item) => {
      console.warn(`  - ${item.programTitle}: ${item.text}`)
    })
  }

  if (stats.unknownProgramCategories.length > 0) {
    console.warn(`- Programs defaulted to major category: ${stats.unknownProgramCategories.length}`)
    stats.unknownProgramCategories.slice(0, 10).forEach((item) => {
      console.warn(
        `  - ${item.title} (${item.code ?? 'no code'}, ${item.credentialType ?? 'no credential type'})`,
      )
    })
  }
}

async function main() {
  const stats = createImportStats()
  const summaries = await fetchJson<KualiProgramSummary[]>(`${catalogBaseUrl}/programs/${catalogId}`)
  const courseSummaries = await fetchJson<KualiCourseSummary[]>(`${catalogBaseUrl}/courses/${catalogId}`)
  const details = await Promise.all(
    summaries.map((summary) =>
      fetchJson<KualiProgramDetail>(`${catalogBaseUrl}/program/${catalogId}/${summary.pid}`),
    ),
  )
  const mathPrograms = details
    .filter((program) => program.facultyCalendarDisplay?.name === mathFacultyName)
    .sort((left, right) => left.title.localeCompare(right.title))
  const courseLinksByCode = new Map<string, CourseLink>()
  const programIds = new Set<string>()
  const programs = mathPrograms.map((program) => {
    const baseId = slugify(program.title)
    const id = getUniqueId(program.code ? slugify(`${program.code} ${program.title}`) : baseId, programIds)

    return buildProgram(program, courseLinksByCode, id, stats)
  })
  courseSummaries
    .filter((course) => targetCourseSubjects.has(course.subjectCode?.name ?? ''))
    .forEach((course) => {
      courseLinksByCode.set(course.__catalogCourseId, {
        code: course.__catalogCourseId,
        courseId: course.id,
        name: course.title,
      })
    })

  const catalogCourseLinks = [...courseLinksByCode.values()].sort((left, right) =>
    left.code.localeCompare(right.code),
  )
  const courseDetails = new Map<string, KualiCourseDetail>()

  await mapWithConcurrency(catalogCourseLinks, 12, async (link) => {
    try {
      courseDetails.set(
        link.code,
        await fetchJson<KualiCourseDetail>(`${catalogBaseUrl}/course/byId/${catalogId}/${link.courseId}`),
      )
    } catch (error) {
      stats.missingCourseDetails.push(link.code)
      console.warn(`Could not fetch ${link.code}: ${error instanceof Error ? error.message : String(error)}`)
    }
  })

  const courses = catalogCourseLinks.map((link) =>
    buildCourseFromLink(link, courseDetails.get(link.code), stats),
  )

  const programsSource = `import type { Degree, Program } from "../types/program";

export const degrees: Degree[] = ${formatTsValue(degrees)};

export const programs: Program[] = ${formatTsValue(programs)};
`

  const coursesSource = `import type { Course } from "../types/course";

export const courses: Course[] = ${formatTsValue(courses)};
`

  await writeFile(resolve('src/data/programs.ts'), programsSource)
  await writeFile(resolve('src/data/courses.ts'), coursesSource)

  console.log(`Imported ${programs.length} Faculty of Mathematics programs.`)
  console.log(`Imported ${courses.length} required and target-subject courses.`)
  printImportStats(stats)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main()
}
