const CustomDot = (props: any) => {
  const { cx, cy, fill } = props;
  return (
    <circle cx={cx} cy={cy} r={6} fill="#000" stroke={fill} strokeWidth={6} />
  );
};
export default CustomDot;
