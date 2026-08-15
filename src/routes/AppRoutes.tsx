import { Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              SmartAttend
            </h1>
          </main>
        }
      />
    </Routes>
  )
}

export default AppRoutes