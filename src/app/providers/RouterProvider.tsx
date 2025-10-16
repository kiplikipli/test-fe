import { Navigate, RouterProvider as ReactRouterProvider, createBrowserRouter } from "react-router"

import { requireAuth } from "@/lib/auth"
import { LoginRoute } from "@/app/routes/auth"
import { RootRedirect } from "@/app/routes/root"
import {
  AttendanceRoute,
  EmployeeLayout,
  ProfileRoute,
  SummaryRoute,
} from "@/app/routes/employee"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/app",
    element: requireAuth(<EmployeeLayout />),
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />, 
      },
      {
        path: "profile",
        element: <ProfileRoute />,
      },
      {
        path: "attendance",
        element: <AttendanceRoute />,
      },
      {
        path: "summary",
        element: <SummaryRoute />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, 
  },
])

export const AppRouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
