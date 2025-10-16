import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Employee Sign In</CardTitle>
          <CardDescription>Access your work-from-home attendance dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" disabled />
          </div>
          <Button className="w-full" disabled>
            Sign In
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Auth wiring coming soon. For now, try the employee experience via {" "}
            <Link className="underline" to="/app/profile">
              this shortcut
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
