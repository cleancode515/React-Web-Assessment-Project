interface LegendLabelProps {
  label: string;
  color: string;
}

const LegendLabel = ({ label, color }: LegendLabelProps) => {
  return (
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:brightness-110 text-black py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-7 rounded-md transition w-fit"
      style={{ backgroundColor: color }}
    >
      {label}
    </p>
  );
};

export default LegendLabel;
