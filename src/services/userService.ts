import api from "./api";
import { UserDashboardData } from "../types/data";

export const userService = {
  fetchUserDashboardData: async (): Promise<UserDashboardData> => {
    try {
      const response = await api.get("/data/user");
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch dashboard data");
    }
  },
};
