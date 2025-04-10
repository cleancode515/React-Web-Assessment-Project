export type PieChartData = {
  x: string;
  y: number;
};
export type ChartData = {
  x: number;
  y: number;
};
export type NormalChartData = {
  x: number;
  y1: number;
  y2: number;
};

export type AdminDashboardData = {
  barChartData: ChartData[];
  pieChartData: PieChartData[];
  normalChartData: NormalChartData[];
};

export interface UserBarChartData {
  year: string;
  coders: number;
  designers: number;
}

export interface UserDashboardData {
  reactData: ChartData[];
  jsData: ChartData[];
  barChartData: UserBarChartData[];
}
