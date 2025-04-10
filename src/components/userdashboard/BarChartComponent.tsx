import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
interface BarChartData {
  year: string;
  coders: number;
  designers: number;
}
interface BarChartComponentProps {
  data: BarChartData[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
}: BarChartComponentProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart layout="vertical" data={data} barCategoryGap={40} barGap={30}>
      <XAxis type="number" domain={[0, 490]} hide />
      <YAxis
        dataKey="year"
        type="category"
        hide
        axisLine={false}
        tickLine={false}
        width={80}
      />
      <Bar dataKey="coders" fill="#2280ff" barSize={30} />
      <Bar dataKey="designers" fill="#3dd34c" barSize={30} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
