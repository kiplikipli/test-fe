import type { NavLinkRenderProps } from "react-router"
import { NavLink, Outlet } from "react-router"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Employee Portal</p>
              <span className="text-lg font-semibold">WFH Attendance</span>
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex">
              Early Preview
            </Badge>
          </div>
          <div className="flex flex-1 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex items-center justify-center gap-4">
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
            <div className="hidden items-center gap-3 sm:flex">
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="leading-tight">
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Product Designer</p>
                </div>
              </div>
              <Button variant="outline" size="sm" disabled>
                Sign out
              </Button>
            </div>
          </div>
        </nav>
        <Separator />
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
