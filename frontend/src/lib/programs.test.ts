import { describe, expect, it } from 'vitest'
import { getProgramRequirementDisplayName } from './programs'

describe('program requirement display names', () => {
  it('hides course lists from complete-all requirement titles', () => {
    expect(
      getProgramRequirementDisplayName(
        'Complete all the following: AMATH231 - Calculus 4 (0.50)AMATH342 - Computational Methods for Differential Equations (0.50)AMATH353 - Partial Differential Equations 1 (0.50)',
      ),
    ).toBe('Complete all the following')
  })

  it('hides course lists from choose requirement titles', () => {
    expect(
      getProgramRequirementDisplayName(
        'Complete 1 of the following: CS115 - Introduction to Computer Science 1 (0.50)CS135 - Designing Functional Programs (0.50)',
      ),
    ).toBe('Complete 1 of the following')
  })

  it('keeps requirement titles without course-code lists unchanged', () => {
    expect(getProgramRequirementDisplayName('Communication requirement')).toBe(
      'Communication requirement',
    )
  })
})
