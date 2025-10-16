import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Review your personal details.</p>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="flex flex-col items-center gap-6 p-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <h2 className="text-2xl font-semibold">Jane Doe</h2>
              <Badge variant="secondary">Remote</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Product designer collaborating with distributed squads across time zones.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:justify-start">
              <span>jane.doe@example.com</span>
              <Separator orientation="vertical" className="hidden h-4 sm:block" />
              <span>UTC-4</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Employee Information</CardTitle>
          <CardDescription>Profile syncing will be connected to the mock API soon.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value="Jane Doe" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value="jane.doe@example.com" readOnly />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" value="Product Designer" readOnly />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Alert variant="default" className="md:max-w-md">
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              Editing and syncing with the mock API are coming soon. For now, data is static.
            </AlertDescription>
          </Alert>
          <Button variant="secondary" disabled>
            Edit Profile
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
