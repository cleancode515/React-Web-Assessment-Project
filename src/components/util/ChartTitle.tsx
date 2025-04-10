interface ChartTitleProps {
  title: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ title }: ChartTitleProps) => (
  <h2
    className="text-2xl font-[700] leading-[20px] text-black"
    style={{
      WebkitTextStroke: "1px rgba(75, 75, 75, 0.8)",
      WebkitTextFillColor: "#000",
    }}
  >
    {title}
  </h2>
);

export default ChartTitle;
