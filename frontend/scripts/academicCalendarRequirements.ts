import * as cheerio from 'cheerio'
import type { Element } from 'domhandler'
import { normalizeCourseCode } from '../src/lib/courseCodes'
import type { Prerequisite } from '../src/types/course'

export type ParsedAcademicCalendarRequirement = {
  nonCourseConditionCount: number
  nonCourseConditions: string[]
  prerequisite?: Prerequisite
}

function getMinimumGrade(text: string): number | undefined {
  return Number(text.match(/minimum grade of\s+(\d+)%/i)?.[1]) || undefined
}

function getRequiredCount(text: string): number | undefined {
  const normalized = text.replace(/\s+/g, ' ')
  const completeMatch = normalized.match(/Complete\s+(\d+)\s+of\s+the\s+following/i)
  const atLeastMatch = normalized.match(/at\s+least\s+(\d+)\s+of\s+the\s+following/i)

  return Number(completeMatch?.[1] ?? atLeastMatch?.[1]) || undefined
}

function getCourseRequirementType(
  text: string,
  requirements: Prerequisite[],
): Prerequisite | undefined {
  if (requirements.length === 0) {
    return undefined
  }

  if (requirements.length === 1) {
    return requirements[0]
  }

  const requiredCount = getRequiredCount(text)

  if (requiredCount && requiredCount > 1) {
    return {
      type: 'chooseN',
      requiredCount: Math.min(requiredCount, requirements.length),
      requirements,
    }
  }

  if (requiredCount === 1 || /one\s+of|any\s+of|at\s+least\s+1/i.test(text)) {
    return {
      type: 'anyOf',
      requirements,
    }
  }

  return {
    type: 'allOf',
    requirements,
  }
}

function simplifyRequirement(requirement: Prerequisite | undefined): Prerequisite | undefined {
  if (!requirement || requirement.type === 'course') {
    return requirement
  }

  const requirements = requirement.requirements
    .map(simplifyRequirement)
    .filter((item): item is Prerequisite => Boolean(item))

  if (requirements.length === 0) {
    return undefined
  }

  if (requirements.length === 1) {
    return requirements[0]
  }

  if (requirement.type === 'chooseN') {
    return {
      ...requirement,
      requiredCount: Math.min(requirement.requiredCount, requirements.length),
      requirements,
    }
  }

  return {
    ...requirement,
    requirements,
  }
}

function parseCourseLinksFromNode($: cheerio.CheerioAPI, node: Element) {
  const links = new Map<string, { code: string }>()

  $(node)
    .find('a[href*="#/courses/view/"]')
    .each((_, link) => {
      const code = normalizeCourseCode($(link).text())

      if (code) {
        links.set(code, { code })
      }
    })

  return [...links.values()]
}

function mergeParsedRequirements(
  parsedRequirements: ParsedAcademicCalendarRequirement[],
): Omit<ParsedAcademicCalendarRequirement, 'prerequisite'> & { requirements: Prerequisite[] } {
  return {
    nonCourseConditionCount: parsedRequirements.reduce(
      (total, item) => total + item.nonCourseConditionCount,
      0,
    ),
    nonCourseConditions: parsedRequirements.flatMap((item) => item.nonCourseConditions),
    requirements: parsedRequirements
      .map((item) => item.prerequisite)
      .filter((item): item is Prerequisite => Boolean(item)),
  }
}

function parseLeafRequirement(
  $: cheerio.CheerioAPI,
  node: cheerio.Cheerio<Element>,
): ParsedAcademicCalendarRequirement {
  const result = node.children('div[data-test$="-result"]').first()
  const resultNode = result.get(0)

  if (!resultNode) {
    return {
      nonCourseConditionCount: 0,
      nonCourseConditions: [],
      prerequisite: undefined,
    }
  }

  const text = result.text().replace(/\s+/g, ' ').trim()
  const links = parseCourseLinksFromNode($, resultNode)

  if (links.length === 0) {
    return {
      nonCourseConditionCount: text ? 1 : 0,
      nonCourseConditions: text ? [text] : [],
      prerequisite: undefined,
    }
  }

  const minGrade = getMinimumGrade(text)
  const requirements: Prerequisite[] = links.map((link) => ({
    type: 'course',
    courseCode: link.code,
    ...(minGrade === undefined ? {} : { minGrade }),
  }))

  return {
    nonCourseConditionCount: 0,
    nonCourseConditions: [],
    prerequisite: getCourseRequirementType(text, requirements),
  }
}

function parseRequirementElement(
  $: cheerio.CheerioAPI,
  element: Element,
): ParsedAcademicCalendarRequirement {
  const node = $(element)

  if ((node.attr('data-test') ?? '').startsWith('ruleView-')) {
    return parseLeafRequirement($, node)
  }

  const groupLabel = node.children('span').first().text().replace(/\s+/g, ' ').trim()
  const isCompletionGroup = /Complete\s+(all|\d+)/i.test(groupLabel)
  const children =
    isCompletionGroup ?
      node.children('ul').first().children('li, div, ul').toArray()
    : node.children('li, div, ul').toArray()
  const parsed = mergeParsedRequirements(
    children.map((child) => parseRequirementElement($, child)),
  )

  if (isCompletionGroup) {
    return {
      nonCourseConditionCount: parsed.nonCourseConditionCount,
      nonCourseConditions: parsed.nonCourseConditions,
      prerequisite: simplifyRequirement(getCourseRequirementType(groupLabel, parsed.requirements)),
    }
  }

  return {
    nonCourseConditionCount: parsed.nonCourseConditionCount,
    nonCourseConditions: parsed.nonCourseConditions,
    prerequisite: simplifyRequirement({
      type: 'allOf',
      requirements: parsed.requirements,
    }),
  }
}

export function parseAcademicCalendarRequirementHtml(
  value: string | undefined,
): ParsedAcademicCalendarRequirement {
  if (!value) {
    return {
      nonCourseConditionCount: 0,
      nonCourseConditions: [],
      prerequisite: undefined,
    }
  }

  const $ = cheerio.load(value)
  const parsed = mergeParsedRequirements(
    $('body')
      .children()
      .toArray()
      .map((node) => parseRequirementElement($, node as Element)),
  )

  return {
    nonCourseConditionCount: parsed.nonCourseConditionCount,
    nonCourseConditions: parsed.nonCourseConditions,
    prerequisite: simplifyRequirement({
      type: 'allOf',
      requirements: parsed.requirements,
    }),
  }
}
