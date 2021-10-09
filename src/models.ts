type Gender = "Male" | "Female"
type Age = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

export interface Sheep {
  id?: number
  name: string
  gender?: Gender
  age?: Age
  address?: string
  phone_number?: string
  email?: string
  note?: string
  group_id?: number
  last_talk_id?: number
  next_talk_id?: number
}

export interface Group {
  id?: number
  name: string
}

export interface Talk {
  id?: number
  sheep_id: number
  year: number
  month: number
  date: number
  hours: number
  minutes: number
  details: string
}
