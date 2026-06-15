export type Term = 'Fall' | 'Winter' | 'Spring'

export type Course = {
  code: string
  name: string
  subject: string
  level: number
  description?: string
  prerequisiteRawText?: string
  prerequisiteNotes?: string[]
  prerequisite?: Prerequisite
  antirequisiteRawText?: string
  antirequisites?: string[]
  termsOffered?: Term[]
}

export type Prerequisite =
  | CourseRequirement
  | AllOfRequirement
  | AnyOfRequirement
  | ChooseNRequirement

export type CourseRequirement = {
  type: 'course'
  courseCode: string
  minGrade?: number
}

export type AllOfRequirement = {
  type: 'allOf'
  requirements: Prerequisite[]
}

export type AnyOfRequirement = {
  type: 'anyOf'
  requirements: Prerequisite[]
}

export type ChooseNRequirement = {
  type: 'chooseN'
  requiredCount: number
  requirements: Prerequisite[]
}
