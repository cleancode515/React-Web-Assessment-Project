import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieChartComponentProps {
  value: number;
  label: string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  value,
  label,
}: PieChartComponentProps) => (
  <div className="text-center flex justify-between">
    <ResponsiveContainer width={150} height={150}>
      <PieChart>
        <Pie
          data={[{ name: label, value }]}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={65}
          fill="#6366F1"
          dataKey="value"
          startAngle={90}
          endAngle={90 + 255}
        >
          <Cell fill="#6366F1" stroke="none" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <p className="mt-2 text-indigo-400 text-3xl font-[700] text-white">
      + {value}%
    </p>
  </div>
);

export default PieChartComponent;
