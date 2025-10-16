export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
}

export type MeResponse = {
  id: string
  name: string
  email: string
}
