import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/auth/LoginPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRoutes