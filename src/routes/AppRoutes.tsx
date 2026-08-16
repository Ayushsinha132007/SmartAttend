import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />
    </Routes>
  )
}

export default AppRoutes