import { describe, expect, it } from 'vitest'
import { parseAcademicCalendarRequirementHtml } from './academicCalendarRequirements'

function courseLink(code: string, name = code) {
  return `<li><span><a href="#/courses/view/${code.toLowerCase()}" target="_blank">${code}</a> - ${name} <span>(0.50)</span></span></li>`
}

function courseRule(id: string, text: string, codes: string[]) {
  return `<li data-test="ruleView-${id}"><div data-test="ruleView-${id}-result">${text}<div><ul>${codes
    .map((code) => courseLink(code))
    .join('')}</ul></div></div></li>`
}

function nonCourseRule(id: string, text: string) {
  return `<li data-test="ruleView-${id}"><div data-test="ruleView-${id}-result">${text}</div></li>`
}

function completeGroup(label: string, children: string) {
  return `<li><span>${label}</span><ul>${children}</ul></li>`
}

describe('academic calendar requirement parser', () => {
  it('parses nested one-of prerequisite groups', () => {
    const html = `<div><ul>${completeGroup(
      'Complete 1 of the following',
      [
        courseRule('A', 'Must have completed at least <span>1</span> of the following:', [
          'CS230',
          'CS231',
        ]),
        completeGroup(
          'Complete all of the following',
          [
            courseRule('B', 'Must have completed the following:', ['AFM341']),
            courseRule('C', 'Must have completed at least <span>1</span> of the following:', [
              'CS116',
              'CS136',
            ]),
          ].join(''),
        ),
      ].join(''),
    )}</ul></div>`

    expect(parseAcademicCalendarRequirementHtml(html).prerequisite).toEqual({
      type: 'anyOf',
      requirements: [
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS230' },
            { type: 'course', courseCode: 'CS231' },
          ],
        },
        {
          type: 'allOf',
          requirements: [
            { type: 'course', courseCode: 'AFM341' },
            {
              type: 'anyOf',
              requirements: [
                { type: 'course', courseCode: 'CS116' },
                { type: 'course', courseCode: 'CS136' },
              ],
            },
          ],
        },
      ],
    })
  })

  it('parses minimum grade requirements', () => {
    const html = `<div><ul>${courseRule(
      'A',
      'Earned a minimum grade of 70% in each of the following:',
      ['MATH137'],
    )}</ul></div>`

    expect(parseAcademicCalendarRequirementHtml(html).prerequisite).toEqual({
      type: 'course',
      courseCode: 'MATH137',
      minGrade: 70,
    })
  })

  it('tracks non-course conditions without enforcing them', () => {
    const html = `<div><ul>${completeGroup(
      'Complete all of the following',
      [
        courseRule('A', 'Must have completed at least <span>1</span> of the following:', [
          'CS350',
          'SE350',
        ]),
        nonCourseRule('B', 'Enrolled in H-Computer Science'),
      ].join(''),
    )}</ul></div>`

    const parsed = parseAcademicCalendarRequirementHtml(html)

    expect(parsed.nonCourseConditionCount).toBe(1)
    expect(parsed.nonCourseConditions).toEqual(['Enrolled in H-Computer Science'])
    expect(parsed.prerequisite).toEqual({
      type: 'anyOf',
      requirements: [
        { type: 'course', courseCode: 'CS350' },
        { type: 'course', courseCode: 'SE350' },
      ],
    })
  })
})
