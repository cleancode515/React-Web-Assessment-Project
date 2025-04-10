interface MainBoxProps {
  children: React.ReactNode;
}

const MainBox: React.FC<MainBoxProps> = ({ children }: MainBoxProps) => (
  <div className="p-6 bg-zinc-0 rounded-lg border-2 border-zinc-800 w-full max-w-full lg:w-[746px]">
    {children}
  </div>
);

export default MainBox;
