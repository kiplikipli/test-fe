import type { NavLinkRenderProps } from "react-router"
import { NavLink, Outlet } from "react-router"

import { cn } from "@/lib/utils"
import { AttendancePage } from "@/pages/employee/AttendancePage"
import { ProfilePage } from "@/pages/employee/ProfilePage"
import { SummaryPage } from "@/pages/employee/SummaryPage"

const navLinkClass = ({ isActive }: NavLinkRenderProps): string =>
  cn(
    "text-sm font-medium transition-colors hover:text-primary",
    isActive ? "text-primary" : "text-muted-foreground"
  )

export const EmployeeLayout = () => {
  return (
    <div className="min-h-screen bg-muted/10">
      <header className="border-b bg-background">
        <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
          <span className="text-lg font-semibold">Employee WFH Attendance</span>
          <div className="flex items-center gap-4">
            <NavLink to="profile" className={navLinkClass} end>
              Profile
            </NavLink>
            <NavLink to="attendance" className={navLinkClass}>
              Attendance
            </NavLink>
            <NavLink to="summary" className={navLinkClass}>
              Summary
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export const ProfileRoute = () => {
  return <ProfilePage />
}

export const AttendanceRoute = () => {
  return <AttendancePage />
}

export const SummaryRoute = () => {
  return <SummaryPage />
}
