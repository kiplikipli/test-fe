import { createElement, type ReactElement } from "react"
import { Navigate } from "react-router"

const STORAGE_KEY = "employee-app-token"

export const getToken = (): string | null => {
  if (typeof window === "undefined") {
    return null
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    console.warn("Failed to read auth token", error)
    return null
  }
}

export const setToken = (token: string): void => {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, token)
  } catch (error) {
    console.warn("Failed to persist auth token", error)
  }
}

export const clearToken = (): void => {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn("Failed to clear auth token", error)
  }
}

export const isAuthenticated = (): boolean => Boolean(getToken())

export const requireAuth = (element: ReactElement): ReactElement => {
  if (!isAuthenticated()) {
    return createElement(Navigate, { to: "/login", replace: true })
  }

  return element
}
