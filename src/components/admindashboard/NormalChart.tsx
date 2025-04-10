import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { NormalChartData } from "@/types/data";

interface BarChartComponentProps {
  data: NormalChartData[];
}

const NormalChart: React.FC<BarChartComponentProps> = ({
  data,
}: BarChartComponentProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} barGap={0}>
      <XAxis tick={false} axisLine={false} />
      <CartesianGrid
        horizontal={true}
        vertical={false}
        stroke="#ccc"
        strokeWidth={0.2}
        strokeDasharray="1 0"
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        domain={[50, 1850]}
        ticks={[50, 500, 950, 1400]}
        tickFormatter={(value) => `$${value}`}
        width={50}
        tick={{
          fill: "#8884d8",
          fontSize: 14,
          fontWeight: 700,
          dx: 40,
          dy: -10,
        }}
      />

      <Bar dataKey="y1" barSize={30} fill="#6d62f7" />
      <Bar dataKey="y2" barSize={30} fill="#6d62f7" opacity={0.77} />
    </BarChart>
  </ResponsiveContainer>
);

export default NormalChart;
