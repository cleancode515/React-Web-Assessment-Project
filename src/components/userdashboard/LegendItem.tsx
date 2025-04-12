import React from "react";

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-4 h-4 rounded-full ${color} mx-3`}></div>
    <span className="text-lg sm:text-xl font-[700] text-zinc-300">{label}</span>
  </div>
);

export default LegendItem;
