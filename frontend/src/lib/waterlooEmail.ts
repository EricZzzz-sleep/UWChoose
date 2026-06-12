export const waterlooEmailDomain = '@uwaterloo.ca'

export function normalizeWaterlooUsername(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/@.*$/, '')
}

export function buildWaterlooEmail(username: string) {
  const normalizedUsername = normalizeWaterlooUsername(username)

  return normalizedUsername ? `${normalizedUsername}${waterlooEmailDomain}` : ''
}
