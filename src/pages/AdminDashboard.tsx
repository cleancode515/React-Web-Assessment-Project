import React, { useEffect } from "react";

import { LogOut } from "lucide-react";
import MainBox from "@/components/util/MainBox";
import ChartTitle from "@/components/util/ChartTitle";
import LastIncomeChart from "@/components/admindashboard/LastIncomeChart";
import LegendLabel from "@/components/admindashboard/LegendLabel";
import LastDataChart from "@/components/admindashboard/LastDataChart";
import NormalChart from "@/components/admindashboard/NormalChart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { logout } from "@/app/features/authSlice";

import {
  fetchAdminDashboardStart,
  fetchAdminDashboardFailure,
  fetchAdminDashboardSuccess,
} from "@/app/features/adminSlice";
import { useTranslation } from "@/contexts/TranslationContext";
import { adminService } from "../services/adminService";
import { AdminDashboardData } from "../types/data";
import MonthIncreaseText from "@/components/util/MonthIncreaseText";
const COLORS = ["#2280FF", "#3DD34C", "#414CAA"];

const AdminDashboard: React.FC = () => {
  const { t, setLanguage, language } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { dashboardData, loading, error } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    const getDashboardData = async () => {
      dispatch(fetchAdminDashboardStart());
      try {
        const data = await adminService.fetchAdminDashboardData();
        dispatch(fetchAdminDashboardSuccess(data as AdminDashboardData));
      } catch (error) {
        dispatch(fetchAdminDashboardFailure("Failed to fetch dashboard data"));
      }
    };

    getDashboardData();
  }, [dispatch]);
  if (loading) return <p>Loading Admin Data...</p>;
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <header className="flex justify-between items-center mb-8 w-full">
        <h1 className="text-4xl font-bold text-center w-full">{t("admin")}</h1>

        <div className="flex gap-4 items-center absolute right-0">
          <div className="flex gap-2">
            <button onClick={() => setLanguage("en")}>EN</button>
            <button onClick={() => setLanguage("hu")}>HU</button>
            <button onClick={() => setLanguage("pl")}>PL</button>
          </div>

          <button
            onClick={() => dispatch(logout())}
            className="text-zinc-400 hover:text-white"
            aria-label="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="p-6 pt-12 bg-zinc-0 rounded-lg border-2 border-zinc-800 w-full max-w-full lg:w-[746px]">
          <div className="flex justify-between items-center mb-6">
            <ChartTitle title={t("lastData")} />
          </div>
          <div className="h-[380px]">
            <LastDataChart data={dashboardData?.barChartData || []} />
          </div>
        </div>
        <MainBox>
          <div className="relative flex mb-6 space-x-6 flex-grow mt-6 h-[380px] w-full">
            <div className="flex flex-col items-start justify-start gap-y-4 ">
              <ChartTitle title={t("lastIncome")} />
              <div className="text-xl mt-5 bg-zinc-800 px-4 py-4 rounded-md text-black font-[700]  hide-under-450">
                {t("aprilJan")}
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center"></div>
            <div className="mt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[500px] h-[500px]">
              <LastIncomeChart
                data={dashboardData?.pieChartData || []}
                colors={COLORS}
              />
            </div>
            <div className="flex flex-col justify-between text-right">
              <div className="space-y-3 text-right">
                <ChartTitle title="+55%" />

                <div className="hide-under-450">
                  <MonthIncreaseText title={t("monthToMonth")} />
                </div>
              </div>
              <MonthIncreaseText title={t("increase")} subtitle={"$456.8"} />
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-4 mt-8 ml-3 sm:ml-4 md:ml-6">
            {dashboardData?.pieChartData.map((item, index) => (
              <LegendLabel
                key={item.x}
                label={item.x}
                color={COLORS[index % COLORS.length]}
              />
            ))}
          </div>
        </MainBox>
        <MainBox>
          <div className="flex justify-between mb-6 mt-8">
            <ChartTitle title={t("normalChart")} />
            <ChartTitle title="+55%" />
          </div>

          <div className="flex justify-between mb-2 h-[380px] translate -translate-x-[20px]">
            <NormalChart data={dashboardData?.normalChartData || []} />
          </div>
        </MainBox>
      </div>
    </div>
  );
};

export default AdminDashboard;
