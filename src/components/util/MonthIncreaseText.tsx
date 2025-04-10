interface MonthIncreaseTextProps {
  title: string;
  subtitle?: string;
}

const MonthIncreaseText: React.FC<MonthIncreaseTextProps> = ({
  title,
  subtitle,
}: MonthIncreaseTextProps) => (
  <p className="text-xl font-[700] mt-7 ">
    {title} <span className="text-white">{subtitle}</span>
  </p>
);

export default MonthIncreaseText;
