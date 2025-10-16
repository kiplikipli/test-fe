import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const AttendancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">
          Clock in and out to track your work-from-home schedule.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Status</CardTitle>
          <CardDescription>Interaction will be wired to the mock server soon.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button disabled>Clock In</Button>
          <Button disabled variant="secondary">
            Clock Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
