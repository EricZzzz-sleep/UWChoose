import { describe, expect, it, vi } from 'vitest'
import { localStudentDraftStorageKey } from './storage'
import { loadLocalStudentDraft, saveLocalStudentDraft } from './localStudentDraft'
import type { LocalStudentDraft } from './localStudentDraft'

describe('local student draft storage', () => {
  it('saves and loads local planner and profile data', () => {
    const storedValues = new Map<string, string>()
    const localStorage = {
      getItem: vi.fn((key: string) => storedValues.get(key) ?? null),
      setItem: vi.fn((key: string, value: string) => storedValues.set(key, value)),
    }
    const draft: LocalStudentDraft = {
      plan: {
        completedCourses: [{ courseCode: 'MATH135', termTaken: 'Fall 2024' }],
        currentTerm: { term: 'Fall', year: 2026 },
        plannedTerms: [],
        prerequisiteOverrides: ['CS136'],
        selectedProgramId: 'computer-science',
      },
      profile: {
        displayName: 'Alex',
        notes: 'Testing locally',
      },
    }

    vi.stubGlobal('window', { localStorage })

    saveLocalStudentDraft(localStudentDraftStorageKey, draft)

    expect(localStorage.setItem).toHaveBeenCalledWith(
      localStudentDraftStorageKey,
      expect.stringContaining('MATH135'),
    )
    expect(loadLocalStudentDraft(localStudentDraftStorageKey)).toEqual(draft)

    vi.unstubAllGlobals()
  })
})
