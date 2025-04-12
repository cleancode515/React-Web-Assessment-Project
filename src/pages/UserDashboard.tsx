import React, { useEffect, useState } from "react";
import MainBox from "@/components/util/MainBox";
import { useTranslation } from "../contexts/TranslationContext";

import { LogOut } from "lucide-react";
import LineChartComponent from "@/components/userdashboard/LineChartComponent";
import BarChartComponent from "@/components/userdashboard/BarChartComponent";
import PieChartComponent from "@/components/userdashboard/PieChartComponent";
import ChartTitle from "@/components/util/ChartTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { UserDashboardData } from "@/types/data";
import { logout } from "@/app/features/authSlice";
import { authService } from "@/services/authService";
import {
  fetchUserDashboardStart,
  fetchUserDashboardSuccess,
  fetchUserDashboardFailure,
} from "@/app/features/userSlice";
import { userService } from "@/services/userService";
import { useNavigate } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const { t, setLanguage, language } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { dashboardData, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    console.log("test");
    const getDashboardData = async () => {
      dispatch(fetchUserDashboardStart());
      console.log("test2");
      try {
        const data = await userService.fetchUserDashboardData();
        console.log("test3");
        console.log("data", data);
        dispatch(fetchUserDashboardSuccess(data as UserDashboardData));
      } catch (error) {
        dispatch(fetchUserDashboardFailure("Failed to fetch dashboard data"));
      }
    };

    getDashboardData();
  }, [dispatch]);

  if (loading) return <p>Loading User Data...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <header className="flex justify-center items-center mb-8 relative w-full">
        <h1 className="text-4xl font-bold text-center">{t("user")}</h1>

        <div className="flex gap-4 items-center absolute right-0">
          <div className="flex gap-2">
            <button onClick={() => setLanguage("en")}>EN</button>
            <button onClick={() => setLanguage("hu")}>HU</button>
            <button onClick={() => setLanguage("pl")}>PL</button>
          </div>

          <button
            onClick={handleLogout}
            className="text-zinc-400 hover:text-white"
            aria-label="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="space-y-6 max-w-3xl mx-auto">
        <MainBox>
          <div className="flex justify-between items-center mb-6">
            <ChartTitle title={t("codersTypes")} />
            <div className="flex space-x-2">
              <span className="bg-blue-500 px-7 py-1 rounded-md text-black text-sm">
                {t("react")}
              </span>
              <span className="bg-green-500 px-7 py-1 rounded-md text-black text-sm">
                {t("jscript")}
              </span>
            </div>
          </div>
          <div className="h-[380px]">
            <LineChartComponent
              reactData={dashboardData?.reactData || []}
              jsData={dashboardData?.jsData || []}
            />
          </div>
        </MainBox>

        <MainBox>
          <div className="flex justify-between items-center mb-6">
            <ChartTitle title={t("newEmployees")} />
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-500 mx-3"></div>
                <span className="text-xl font-[700] text-zinc-300">
                  {t("coders")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 mx-3"></div>
                <span className="text-xl font-[700] text-zinc-300">
                  {t("designers")}
                </span>
              </div>
            </div>
          </div>

          <div className="h-[590px]">
            <BarChartComponent data={dashboardData?.barChartData || []} />
          </div>
        </MainBox>

        <MainBox>
          <div className="flex justify-between items-center mb-6">
            <h2 className="ml-10 text-2xl font-bold ">{t("soldProducts")}</h2>
            <span className="text-2xl font-bold">Mar - Jan 2022</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
            <PieChartComponent value={10} label="Group A" />
            <PieChartComponent value={15} label="Group B" />

            <div className="flex items-center">
              <span className="bg-white text-black px-3 py-5 rounded-md text-lg font-[700]">
                {t("jscript")}
              </span>
            </div>
          </div>
        </MainBox>
      </div>
    </div>
  );
};

export default UserDashboard;
