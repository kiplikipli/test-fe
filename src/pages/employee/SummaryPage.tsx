import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const placeholderRows = [
  { date: "--", clockIn: "--", clockOut: "--", status: "Waiting for data" },
]

export const SummaryPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Attendance Summary</h1>
        <p className="text-muted-foreground">
          Select a date range to review your historical attendance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Summary Filters</CardTitle>
          <CardDescription>Analytics widgets will arrive in later milestones.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input id="from" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input id="to" type="date" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline" className="uppercase">
              Export soon
            </Badge>
            <Separator orientation="vertical" className="hidden h-5 md:block" />
            <span>Reports and CSV downloads are on the roadmap.</span>
          </div>
          <Alert className="md:max-w-md">
            <AlertTitle>Preview data</AlertTitle>
            <AlertDescription>
              Once connected, filters will refresh the table and populate analytics cards.
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Attendance Log</CardTitle>
          <CardDescription>Table data will be populated from the mock server soon.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Clock In</TableHead>
                <TableHead>Clock Out</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderRows.map((row) => (
                <TableRow key={row.status}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.clockIn}</TableCell>
                  <TableCell>{row.clockOut}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption>Historical entries will appear once the API is connected.</TableCaption>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
