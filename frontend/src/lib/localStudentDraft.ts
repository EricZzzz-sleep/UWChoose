import { normalizePlanBackup } from './planBackup'
import type { StudentPlanBackup, UserProfile } from '../types/student'

export type LocalStudentDraft = {
  plan: StudentPlanBackup
  profile: UserProfile
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getLocalStorage(): Storage | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  try {
    return window.localStorage
  } catch {
    return undefined
  }
}

export function loadLocalStudentDraft(storageKey: string): LocalStudentDraft | undefined {
  const localStorage = getLocalStorage()

  if (!localStorage) {
    return undefined
  }

  try {
    const storedValue = localStorage.getItem(storageKey)

    if (!storedValue) {
      return undefined
    }

    const parsedValue: unknown = JSON.parse(storedValue)

    if (!isObject(parsedValue)) {
      return undefined
    }

    return {
      plan: normalizePlanBackup(parsedValue.plan),
      profile: isObject(parsedValue.profile) ? parsedValue.profile : {},
    }
  } catch {
    return undefined
  }
}

export function saveLocalStudentDraft(storageKey: string, draft: LocalStudentDraft): void {
  const localStorage = getLocalStorage()

  if (!localStorage) {
    return
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(draft))
  } catch {
    // Storage may be unavailable in private or restricted browser modes.
  }
}
