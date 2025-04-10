import api from "./api";
import { AdminDashboardData } from "../types/data";

export const adminService = {
  fetchAdminDashboardData: async (): Promise<AdminDashboardData> => {
    try {
      const response = await api.get("/data/admin");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch dashboard data");
    }
  },
};
