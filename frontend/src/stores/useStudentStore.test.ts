import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  clearLegacyStudentStorage,
  localStudentDraftStorageKey,
  studentStorageKey,
} from '../lib/storage'
import { useStudentStore } from './useStudentStore'

afterEach(() => {
  useStudentStore.getState().resetPlan()
  useStudentStore.getState().resetUserProfile()
  vi.unstubAllGlobals()
})

describe('student store persistence', () => {
  it('saves signed-out edits to localStorage for testing', () => {
    const localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    vi.stubGlobal('window', { localStorage })

    useStudentStore.getState().addCompletedCourse({
      courseCode: 'math 135',
      termTaken: 'Fall 2024',
    })

    expect(useStudentStore.getState().completedCourses[0]?.courseCode).toBe('MATH135')
    expect(localStorage.setItem).toHaveBeenCalledWith(
      localStudentDraftStorageKey,
      expect.stringContaining('MATH135'),
    )
  })

  it('saves profile edits to localStorage for testing', () => {
    const localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    vi.stubGlobal('window', { localStorage })

    useStudentStore.getState().updateUserProfile({
      displayName: 'Alex',
      notes: 'Testing locally',
    })

    expect(localStorage.setItem).toHaveBeenCalledWith(
      localStudentDraftStorageKey,
      expect.stringContaining('Testing locally'),
    )
  })

  it('clears legacy persisted planner data on app startup', () => {
    const localStorage = {
      removeItem: vi.fn(),
    }

    vi.stubGlobal('window', { localStorage })

    clearLegacyStudentStorage()

    expect(localStorage.removeItem).toHaveBeenCalledWith(studentStorageKey)
  })
})
