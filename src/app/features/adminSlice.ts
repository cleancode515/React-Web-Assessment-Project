// adminSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminDashboardData } from "../../types/data";

interface AdminState {
  dashboardData: AdminDashboardData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  dashboardData: null,
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    fetchAdminDashboardStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAdminDashboardSuccess: (
      state,
      action: PayloadAction<AdminDashboardData>
    ) => {
      state.loading = false;
      state.dashboardData = action.payload;
    },
    fetchAdminDashboardFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAdminDashboardStart,
  fetchAdminDashboardSuccess,
  fetchAdminDashboardFailure,
} = adminSlice.actions;

export default adminSlice.reducer;
