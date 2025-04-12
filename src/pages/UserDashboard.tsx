import React, { useEffect, useState } from "react";
import MainBox from "@/components/util/MainBox";
import { useTranslation } from "../contexts/TranslationContext";

import { LogOut, Menu, X } from "lucide-react";
import LineChartComponent from "@/components/userdashboard/LineChartComponent";
import BarChartComponent from "@/components/userdashboard/BarChartComponent";
import PieChartComponent from "@/components/userdashboard/PieChartComponent";
import ChartTitle from "@/components/util/ChartTitle";
import LegendContainer from "@/components/userdashboard/LegendContainer";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dashboardData, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const getDashboardData = async () => {
      dispatch(fetchUserDashboardStart());
      try {
        const data = await userService.fetchUserDashboardData();
        dispatch(fetchUserDashboardSuccess(data as UserDashboardData));
      } catch (error) {
        dispatch(fetchUserDashboardFailure("Failed to fetch dashboard data"));
      }
    };

    getDashboardData();
  }, [dispatch]);

  if (loading)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading User Data...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900 p-4 flex justify-between items-center border-b border-zinc-800">
        <h1 className="text-xl font-bold">{t("user")}</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-75"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-zinc-900 p-6 w-64 h-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl font-bold mb-4">{t("user")}</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-zinc-400 text-sm">Language</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded ${
                        language === "en" ? "bg-blue-600" : "bg-zinc-800"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("hu");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded ${
                        language === "hu" ? "bg-blue-600" : "bg-zinc-800"
                      }`}
                    >
                      HU
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("pl");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded ${
                        language === "pl" ? "bg-blue-600" : "bg-zinc-800"
                      }`}
                    >
                      PL
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="hidden md:flex justify-center items-center mb-8 relative w-full">
        <h1 className="text-4xl font-bold text-center">{t("user")}</h1>

        <div className="flex gap-4 items-center absolute right-0">
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded ${
                language === "en" ? "bg-blue-600" : "bg-zinc-800"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hu")}
              className={`px-3 py-1 rounded ${
                language === "hu" ? "bg-blue-600" : "bg-zinc-800"
              }`}
            >
              HU
            </button>
            <button
              onClick={() => setLanguage("pl")}
              className={`px-3 py-1 rounded ${
                language === "pl" ? "bg-blue-600" : "bg-zinc-800"
              }`}
            >
              PL
            </button>
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

      <div className="space-y-6 max-w-3xl mx-auto mt-16 md:mt-0">
        <MainBox>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
            <ChartTitle title={t("codersTypes")} />
            <div className="flex space-x-2">
              <span className="bg-blue-500 py-1 rounded-md text-black text-sm w-20 text-center font-bold">
                {t("react")}
              </span>
              <span className="bg-green-500  py-1 rounded-md text-black text-sm w-20 text-center font-bold">
                {t("jscript")}
              </span>
            </div>
          </div>
          <div className="h-[300px] sm:h-[380px]">
            <LineChartComponent
              reactData={dashboardData?.reactData || []}
              jsData={dashboardData?.jsData || []}
            />
          </div>
        </MainBox>

        <MainBox>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
            <ChartTitle title={t("newEmployees")} />
            <LegendContainer
              items={[
                { color: "bg-green-500", label: t("coders") },
                { color: "bg-blue-500", label: t("designers") },
              ]}
            />
          </div>

          <div className="h-[400px] sm:h-[590px]">
            <BarChartComponent data={dashboardData?.barChartData || []} />
          </div>
        </MainBox>

        <MainBox>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl font-bold">
              {t("soldProducts")}
            </h2>
            <span className="text-lg sm:text-2xl font-bold">
              Mar - Jan 2022
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <PieChartComponent value={10} label="Group A" />
            <PieChartComponent value={15} label="Group B" />

            <div className="flex items-center mt-4 sm:mt-0">
              <span className="bg-white text-black px-3 py-3 sm:py-5 rounded-md text-base sm:text-lg font-[700]">
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
