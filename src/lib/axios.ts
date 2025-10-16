import axios from "axios"

import { getToken } from "@/lib/auth"

export const api = axios.create({
  baseURL: "/api",
})

api.interceptors.request.use((config) => {
  const token = getToken()

  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
