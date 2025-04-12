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
    try {
      const response = await api.post("/auth/login", credentials);
      const user = response.data?.user;
      const tokens = response.data?.tokens;

      if (!user || !tokens) {
        throw new Error("Invalid login response format");
      }

      // Store both token and user data
      localStorage.setItem("token", tokens.access.token);
      localStorage.setItem("user", JSON.stringify(user));

      toast({
        title: "Login successful",
        description: `Welcome ${user.name}`,
      });

      return { user, tokens };
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: async (): Promise<User> => {
    try {
      // First try to get user from localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        return JSON.parse(storedUser);
      }

      // If not in localStorage, fetch from API
      const response = await api.get("/auth/me");
      const user = response.data;

      // Store the user data
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch user data"
        );
      }
      throw new Error("Failed to fetch user data");
    }
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return !!(token && user);
  },
};
