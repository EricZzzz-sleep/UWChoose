import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { buildWaterlooEmail, normalizeWaterlooUsername, waterlooEmailDomain } from '../lib/waterlooEmail'
import { useAuthStore } from '../stores/useAuthStore'
import { useStudentStore } from '../stores/useStudentStore'

function getMessageClassName(message: string) {
  return /sent|signed/i.test(message)
    ? 'rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800'
    : 'rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800'
}

export function SignInPage() {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const isHydrating = useAuthStore((state) => state.isHydrating)
  const message = useAuthStore((state) => state.message)
  const requestVerificationCode = useAuthStore((state) => state.requestVerificationCode)
  const verifyVerificationCode = useAuthStore((state) => state.verifyVerificationCode)
  const signOut = useAuthStore((state) => state.signOut)
  const clearMessage = useAuthStore((state) => state.clearMessage)
  const resetPlan = useStudentStore((state) => state.resetPlan)
  const resetUserProfile = useStudentStore((state) => state.resetUserProfile)
  const [username, setUsername] = useState('')
  const [hasRequestedCode, setHasRequestedCode] = useState(false)
  const [code, setCode] = useState('')
  const email = useMemo(() => buildWaterlooEmail(username), [username])

  useEffect(() => {
    clearMessage()
  }, [clearMessage])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email) {
      return
    }

    try {
      if (hasRequestedCode) {
        await verifyVerificationCode(email, code)
        navigate('/profile')
        return
      }

      await requestVerificationCode(email)
      setHasRequestedCode(true)
    } catch {
      // Message is stored in auth state for display.
    }
  }

  function updateUsername(value: string) {
    setUsername(normalizeWaterlooUsername(value))
    setHasRequestedCode(false)
    setCode('')
    clearMessage()
  }

  if (user) {
    return (
      <div className="mx-auto grid max-w-3xl gap-6 py-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-emerald-700">Waterloo account</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">You are signed in</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Your UWChoose planner and profile can sync online with this verified Waterloo account.
          </p>

          <div className="mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <img className="h-14 w-14 rounded-full border border-slate-200 bg-white object-cover" src={user.avatarUrl} alt="" />
            <div className="min-w-0">
              <p className="truncate font-semibold text-slate-950">{user.displayName ?? 'Waterloo user'}</p>
              <p className="truncate text-sm text-slate-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              to="/profile"
            >
              Open profile
            </Link>
            <button
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              disabled={isHydrating}
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
        </section>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <section className="space-y-5">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Waterloo verification</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">Sign in to UWChoose</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use your University of Waterloo email to sync plans, profile details, completed courses, and saved schedules across devices.
          </p>
        </div>
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-950">What gets saved</p>
          <p>Your planner, profile, completed courses, prerequisite overrides, and program selections are attached to your verified account.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-950">Verify your Waterloo email</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter only your Waterloo username. The domain is fixed for you.
          </p>
        </div>

        <form
          className="mt-6 grid gap-5"
          onSubmit={(event) => {
            void handleSubmit(event)
          }}
        >
          <div>
            <label className="text-sm font-semibold text-slate-800" htmlFor="waterloo-username">
              Waterloo username
            </label>
            <div className="mt-2 flex h-12 overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
              <input
                autoComplete="username"
                className="min-w-0 flex-1 px-3 text-slate-950 outline-none"
                id="waterloo-username"
                inputMode="email"
                placeholder="abc123"
                type="text"
                value={username}
                onChange={(event) => updateUsername(event.target.value)}
              />
              <span className="flex shrink-0 items-center border-l border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-600">
                {waterlooEmailDomain}
              </span>
            </div>
            {email ? <p className="mt-2 text-xs text-slate-500">Verification code will be sent to {email}.</p> : null}
          </div>

          {hasRequestedCode ? (
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="verification-code">
                Verification code
              </label>
              <input
                autoComplete="one-time-code"
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-3 text-slate-950 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                id="verification-code"
                inputMode="numeric"
                maxLength={6}
                pattern="[0-9]{6}"
                placeholder="6-digit code"
                value={code}
                onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
              />
            </div>
          ) : null}

          <button
            className="h-12 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isHydrating || !email || (hasRequestedCode && code.length !== 6)}
          >
            {isHydrating ? 'Working...' : hasRequestedCode ? 'Verify and sign in' : 'Send verification code'}
          </button>

          {message ? <p className={getMessageClassName(message)}>{message}</p> : null}
        </form>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <Link className="text-sm font-semibold text-slate-700 hover:text-slate-950" to="/">
            Back to app
          </Link>
        </div>
      </section>
    </div>
  )
}
