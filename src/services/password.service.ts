import api from "./api"

export type ForgotPasswordPayload = {
  email: string
}

export type ResetPasswordPayload = {
  token: string
  password: string
}

export const forgotPassword = async (
  payload: ForgotPasswordPayload,
) => {
  const response = await api.post("/auth/forgot-password", payload)

  return response.data
}

export const resetPassword = async (
  payload: ResetPasswordPayload,
) => {
  const response = await api.post("/auth/reset-password", payload)

  return response.data
}