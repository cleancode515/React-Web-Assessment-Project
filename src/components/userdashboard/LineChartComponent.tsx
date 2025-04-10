import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import CustomDot from "./CustomDot";
interface ChartData {
  x: number;
  y: number;
}
interface LineChartComponentProps {
  reactData: ChartData[];
  jsData: ChartData[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({
  reactData,
  jsData,
}: LineChartComponentProps) => (
  <ResponsiveContainer width="100%" height="80%">
    <LineChart>
      <CartesianGrid
        horizontal={true}
        vertical={false}
        stroke="#ccc"
        strokeWidth={0.1}
        strokeDasharray="1 0"
      />
      <XAxis
        dataKey="x"
        axisLine={false}
        tickLine={false}
        type="number"
        tick={{
          fontSize: 18,
          fill: "#fff",
          fontWeight: 700,
          dy: 10,
        }}
        domain={[0.5, 8.5]}
        ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
        tickFormatter={(tick) => `${tick}m`}
      />
      <YAxis hide domain={[0, 45]} ticks={[0, 10, 20, 30, 40]} />
      <Line
        type="linear"
        dataKey="y"
        data={reactData}
        stroke="#2280ff"
        strokeWidth={6}
        dot={<CustomDot fill="#2280ff" />}
      />
      <Line
        type="linear"
        dataKey="y"
        data={jsData}
        stroke="#3dd34c"
        strokeWidth={6}
        dot={<CustomDot fill="#3dd34c" />}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
