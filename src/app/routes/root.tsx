import { Navigate } from "react-router"

import { isAuthenticated } from "@/lib/auth"

export const RootRedirect = () => {
  const destination = isAuthenticated() ? "/app/profile" : "/login"

  return <Navigate to={destination} replace />
}
