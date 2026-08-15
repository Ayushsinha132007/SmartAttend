import { create } from "zustand"
import type { LoginResponse } from "../services/auth.service"

interface AuthState {
  user: LoginResponse["user"] | null
  accessToken: string | null
  isAuthenticated: boolean

  setAuth: (data: LoginResponse) => void
  logout: () => void
}

const storedToken = localStorage.getItem("accessToken")

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: storedToken,
  isAuthenticated: Boolean(storedToken),

  setAuth: (data) => {
    localStorage.setItem("accessToken", data.accessToken)

    set({
      user: data.user,
      accessToken: data.accessToken,
      isAuthenticated: true,
    })
  },

  logout: () => {
    localStorage.removeItem("accessToken")

    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    })
  },
}))