import api from "./api";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: "student" | "faculty" | "admin";
  };
}

export const loginUser = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", payload);

  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  try {
    await api.post("/auth/logout");
  } finally {
    localStorage.removeItem("accessToken");
  }
};