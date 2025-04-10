interface LegendLabelProps {
  label: string;
  color: string;
}

const LegendLabel = ({ label, color }: LegendLabelProps) => {
  return (
    <p
      className="text-2xl font-[700] hover:brightness-110 text-black py-4 px-7 rounded-md font-bold transition"
      style={{ backgroundColor: color }}
    >
      {label}
    </p>
  );
};

export default LegendLabel;
