import { describe, expect, it } from 'vitest'
import { getProgramCategory, parseRequirements } from './importWaterlooMathPrograms'

function programRequirementLink(code: string, id: string, name = code) {
  return `<li><span><a href="#/courses/view/${id}" target="_blank">${code}</a> - ${name} <span>(0.50)</span></span></li>`
}

function programRule(id: string, text: string, courses: string[]) {
  return `<li data-test="ruleView-${id}"><div data-test="ruleView-${id}-result">${text}<div><ul>${courses
    .map((course, index) => programRequirementLink(course, `abc12${index}`))
    .join('')}</ul></div></div></li>`
}

function completeGroup(label: string, children: string) {
  return `<li><span>${label}</span><ul>${children}</ul></li>`
}

function stats() {
  return {
    missingCourseDetails: [],
    programRequirementsWithoutCourses: [],
    skippedConditions: [],
    unknownProgramCategories: [],
  }
}

describe('Waterloo Math importer program parsing', () => {
  it('preserves grouped choose requirements instead of separate flat leaf rules', () => {
    const importStats = stats()
    const courseLinksByCode = new Map()
    const program = {
      id: 'program-id',
      pid: 'program-pid',
      title: 'Honours Test',
      courseRequirementsNoUnits: `<div><ul>${completeGroup(
        'Complete 1 of the following',
        [
          programRule('A', 'Must have completed the following:', ['CS135']),
          programRule('B', 'Must have completed the following:', ['CS115']),
        ].join(''),
      )}</ul></div>`,
    }

    expect(parseRequirements(program, courseLinksByCode, 'test-program', importStats)).toEqual([
      expect.objectContaining({
        courses: ['CS135', 'CS115'],
        name: 'Complete 1 of the following',
        requiredCount: 1,
        type: 'chooseN',
      }),
    ])
  })

  it('collapses duplicate course links inside a requirement', () => {
    const courseLinksByCode = new Map()
    const program = {
      id: 'program-id',
      pid: 'program-pid',
      title: 'Honours Test',
      courseRequirementsNoUnits: `<div><ul>${programRule(
        'A',
        'Complete all of the following:',
        ['CS135', 'CS135'],
      )}</ul></div>`,
    }

    expect(parseRequirements(program, courseLinksByCode, 'test-program', stats())[0].courses).toEqual([
      'CS135',
    ])
  })

  it('records program requirement rules without detected courses', () => {
    const importStats = stats()
    const program = {
      id: 'program-id',
      pid: 'program-pid',
      title: 'Honours Test',
      courseRequirementsNoUnits:
        '<div><ul><li data-test="ruleView-A"><div data-test="ruleView-A-result">Enrolled in Honours Mathematics</div></li></ul></div>',
    }

    expect(parseRequirements(program, new Map(), 'test-program', importStats)).toEqual([])
    expect(importStats.programRequirementsWithoutCourses).toEqual([
      {
        programTitle: 'Honours Test',
        text: 'Enrolled in Honours Mathematics',
      },
    ])
  })

  it('records unknown categories that fall back to major', () => {
    const importStats = stats()
    const category = getProgramCategory(
      {
        id: 'program-id',
        pid: 'program-pid',
        title: 'Mystery Credential Program',
        undergraduateCredentialType: { name: 'Certificate' },
      },
      importStats,
    )

    expect(category).toBe('major')
    expect(importStats.unknownProgramCategories).toEqual([
      {
        code: undefined,
        credentialType: 'Certificate',
        title: 'Mystery Credential Program',
      },
    ])
  })
})
