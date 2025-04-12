import React from "react";
import LegendItem from "./LegendItem";

interface LegendContainerProps {
  items: {
    color: string;
    label: string;
  }[];
}

const LegendContainer: React.FC<LegendContainerProps> = ({ items }) => (
  <div className="flex space-x-4">
    {items.map((item, index) => (
      <LegendItem key={index} color={item.color} label={item.label} />
    ))}
  </div>
);

export default LegendContainer;
