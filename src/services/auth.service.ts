import api from "./api"

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  message: string
  accessToken: string
  user: {
    id: string
    name: string
    email: string
    role: "student" | "faculty" | "admin"
  }
}

export const loginUser = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    payload,
  )

  return response.data
}