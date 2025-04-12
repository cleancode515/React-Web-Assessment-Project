import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface LastIncomeChartProps {
  data: any[];
  colors: string[];
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
}

const LastIncomeChart = ({
  data,
  colors,
  innerRadius = 94,
  outerRadius = 120,
  startAngle = 0,
  endAngle = 275,
  paddingAngle = 1,
}: LastIncomeChartProps) => {
  return (
    <ResponsiveContainer className="w-[250px] h-[250px] z-50 relative translate -translate-x-[20px]">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={paddingAngle}
          dataKey="y"
          nameKey="x"
          startAngle={startAngle}
          endAngle={endAngle}
        >
          {data.map((entry: any, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LastIncomeChart;
