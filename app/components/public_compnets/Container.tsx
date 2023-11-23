function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" overflow-y-scroll  min-w-[200px] max-w-[800px] m-auto ">
      <div className="m-auto pt-5">{children}</div>
    </div>
  );
}

export default Container;
