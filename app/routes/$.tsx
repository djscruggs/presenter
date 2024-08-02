import ErrorBoundary from "~/ui/errorBoundary";
import { Outlet } from "@remix-run/react"

export default function Generic() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  )
}