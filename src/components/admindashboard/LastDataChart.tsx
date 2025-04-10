import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import CustomBar from "./CustomBar";
import { ChartData } from "@/types/data";
interface BarChartComponentProps {
  data: ChartData[];
}

const LastDataChart: React.FC<BarChartComponentProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <XAxis
        dataKey="x"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#9CA3AF" }}
      />
      <CartesianGrid
        horizontal={true}
        vertical={false}
        stroke="#ccc"
        strokeWidth={0.1}
        strokeDasharray="1 0"
      />
      <YAxis hide domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
      <Bar dataKey="y" shape={<CustomBar />} />
    </BarChart>
  </ResponsiveContainer>
);

export default LastDataChart;
