const CustomBar = (props: any) => {
  const { x, y, width, height, index } = props;
  const isOdd = index % 2 === 0;

  const barWidth = isOdd ? 34 : 30;
  const fill = isOdd ? "#6366F1" : "#22C55E";
  const offset = (width - barWidth) / 2;
  return (
    <rect x={x + offset} y={y} width={barWidth} height={height} fill={fill} />
  );
};
export default CustomBar;
