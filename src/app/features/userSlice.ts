// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDashboardData } from "../../types/data";
interface UserState {
  dashboardData: UserDashboardData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  dashboardData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserDashboardStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserDashboardSuccess: (
      state,
      action: PayloadAction<UserDashboardData>
    ) => {
      state.loading = false;
      state.dashboardData = action.payload;
    },
    fetchUserDashboardFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserDashboardStart,
  fetchUserDashboardSuccess,
  fetchUserDashboardFailure,
} = userSlice.actions;

export default userSlice.reducer;
