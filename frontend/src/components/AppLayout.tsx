import { useEffect, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/uwchoose_logo.png'
import { getAccountPlan, saveAccountPlan } from '../lib/authApi'
import { useCatalog } from '../lib/catalogContext'
import { clearLegacyStudentStorage } from '../lib/storage'
import { useAuthStore } from '../stores/useAuthStore'
import { useStudentStore } from '../stores/useStudentStore'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/planner', label: 'Planner' },
  { to: '/programs', label: 'Programs' },
  { to: '/graph', label: 'Graph' },
  { to: '/profile', label: 'Profile' },
]

function AuthControls() {
  const user = useAuthStore((state) => state.user)
  const signOut = useAuthStore((state) => state.signOut)
  const resetPlan = useStudentStore((state) => state.resetPlan)
  const resetUserProfile = useStudentStore((state) => state.resetUserProfile)

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <NavLink
          aria-label="Open profile"
          className="h-11 w-11 overflow-hidden rounded-full border border-slate-300 bg-slate-100"
          to="/profile"
        >
          <img className="h-full w-full object-cover" src={user.avatarUrl} alt="" />
        </NavLink>
        <button
          className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          type="button"
          onClick={() => {
            void signOut().finally(() => {
              resetPlan()
              resetUserProfile()
            })
          }}
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-end gap-2">
      <NavLink
        className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        to="/signin"
      >
        Sign in
      </NavLink>
    </div>
  )
}

function AccountPlanSync() {
  const user = useAuthStore((state) => state.user)
  const hydrate = useAuthStore((state) => state.hydrate)
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const prerequisiteOverrides = useStudentStore((state) => state.prerequisiteOverrides)
  const selectedProgramId = useStudentStore((state) => state.selectedProgramId)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const userProfile = useStudentStore((state) => state.userProfile)
  const exportPlan = useStudentStore((state) => state.exportPlan)
  const importPlan = useStudentStore((state) => state.importPlan)
  const updateUserProfile = useStudentStore((state) => state.updateUserProfile)
  const resetPlan = useStudentStore((state) => state.resetPlan)
  const resetUserProfile = useStudentStore((state) => state.resetUserProfile)
  const loadedUserIdRef = useRef<string | undefined>(undefined)
  const isLoadingPlanRef = useRef(false)

  useEffect(() => {
    clearLegacyStudentStorage()
    void hydrate()
  }, [hydrate])

  useEffect(() => {
    if (!user) {
      if (loadedUserIdRef.current) {
        resetPlan()
        resetUserProfile()
      }

      loadedUserIdRef.current = undefined
      return
    }

    isLoadingPlanRef.current = true
    void getAccountPlan()
      .then((accountPlan) => {
        if (accountPlan.plan) {
          importPlan(accountPlan.plan)
        }

        if (accountPlan.profile) {
          updateUserProfile(accountPlan.profile)
        }
      })
      .catch(() => undefined)
      .finally(() => {
        loadedUserIdRef.current = user.id
        isLoadingPlanRef.current = false
      })
  }, [importPlan, resetPlan, resetUserProfile, updateUserProfile, user])

  useEffect(() => {
    if (!user || loadedUserIdRef.current !== user.id || isLoadingPlanRef.current) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      void saveAccountPlan(exportPlan(), {
        displayName: userProfile.displayName,
        programId: userProfile.programId ?? selectedProgramId,
        academicSelections: userProfile.academicSelections,
        startTerm: userProfile.startTerm,
        startYear: userProfile.startYear,
        notes: userProfile.notes,
      }).catch(() => undefined)
    }, 1200)

    return () => window.clearTimeout(timeoutId)
  }, [
    completedCourses,
    currentTerm,
    exportPlan,
    plannedTerms,
    prerequisiteOverrides,
    selectedProgramId,
    user,
    userProfile,
  ])

  return null
}

export function AppLayout() {
  const { error, isLoading, source } = useCatalog()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <AccountPlanSync />
      <header className="no-print border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <NavLink to="/" className="flex items-center gap-3" aria-label="UWChoose home">
              <img src={logo} alt="" className="h-14 w-14 object-contain" />
              <span className="text-xl font-semibold tracking-tight">UWChoose</span>
            </NavLink>
            <AuthControls />
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-slate-200 text-slate-950'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`
                }
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {source === 'local' && error && !isLoading ? (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Using local catalog because the backend API is unavailable.
          </div>
        ) : null}
        <Outlet />
      </main>
    </div>
  )
}
