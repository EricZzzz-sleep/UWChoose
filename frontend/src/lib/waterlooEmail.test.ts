import { describe, expect, it } from 'vitest'
import { buildWaterlooEmail, normalizeWaterlooUsername } from './waterlooEmail'

describe('Waterloo email helpers', () => {
  it('builds fixed-domain Waterloo email addresses from usernames', () => {
    expect(buildWaterlooEmail(' AbC123 ')).toBe('abc123@uwaterloo.ca')
  })

  it('keeps only the local part when a full email is pasted', () => {
    expect(normalizeWaterlooUsername('casey@uwaterloo.ca')).toBe('casey')
    expect(buildWaterlooEmail('casey@example.com')).toBe('casey@uwaterloo.ca')
  })

  it('returns an empty email for an empty username', () => {
    expect(buildWaterlooEmail('   ')).toBe('')
  })
})
