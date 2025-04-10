import api from "./api";
import { Tokens, User } from "@/types/authTypes";
import { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  tokens: Tokens;
  user: User;
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    console.log("Login successful", credentials);

    const response = await api.post("/auth/login", credentials);

    const user = response.data?.user;
    const tokens = response.data?.tokens;
    if (!user || !tokens) {
      throw new Error("Invalid login response format");
    }

    await localStorage.setItem("token", tokens.access.token);

    toast({
      title: "Login successful",
      description: `Welcome ${user.name}`,
    });

    return { user, tokens };
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await api.get("/auth/me");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch user data"
        );
      }
      throw new Error("Failed to fetch user data");
    }
  },
};
