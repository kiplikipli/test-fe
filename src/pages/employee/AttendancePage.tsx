import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const schedule = [
  { label: "Core hours", value: "9:00 AM – 5:00 PM" },
  { label: "Break reminder", value: "1:00 PM" },
]

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
        <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Today&apos;s Status</CardTitle>
            <CardDescription>Interaction will be wired to the mock server soon.</CardDescription>
          </div>
          <Badge variant="secondary" className="w-fit md:w-auto">
            Offline mode
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {new Intl.DateTimeFormat("en", {
                weekday: "long",
                month: "short",
                day: "numeric",
              }).format(new Date())}
            </span>
            <Separator orientation="vertical" className="hidden h-6 md:block" />
            <span className="text-sm text-muted-foreground">Next action: Clock in</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button disabled className="flex-1 min-w-[120px]">
              Clock In
            </Button>
            <Button disabled variant="secondary" className="flex-1 min-w-[120px]">
              Clock Out
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {schedule.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "rounded-lg border border-dashed border-muted bg-muted/40 p-4",
                  "flex flex-col gap-1"
                )}
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Alert className="w-full md:w-auto">
            <AlertTitle>Coming soon</AlertTitle>
            <AlertDescription>
              Clocking events will sync with the mock API and unlock live status updates.
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>
    </div>
  )
}
