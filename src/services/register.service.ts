import api from "./api"

export interface RegisterPayload {
  name: string
  email: string
  role: "student" | "faculty"
  password: string
}

export interface RegisterResponse {
  message: string
  accessToken: string
  user: {
    id: string
    name: string
    email: string
    role: "student" | "faculty" | "admin"
  }
}

export const registerUser = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/auth/register",
    payload,
  )

  return response.data
}