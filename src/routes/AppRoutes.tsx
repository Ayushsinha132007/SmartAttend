import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default AppRoutes