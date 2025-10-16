import React from "react"
import ReactDOM from "react-dom/client"

import { AppRouterProvider } from "@/app/providers/RouterProvider"
import { QueryProvider } from "@/app/providers/QueryProvider"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import api from "@/lib/axios"
import { installMockAdapter, seed } from "@/lib/mockServer"

import "@/styles/globals.css"

installMockAdapter(api)
seed()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AppRouterProvider />
        <Toaster />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
)
