const ProjectType = ({ color, children }) => {
  return (
    <div
      className="flex items-center px-2 py-1 flex-none text-sm bg-white rounded-sm text-black w-fit"
      style={{
        background: `color-mix(in srgb, ${color}, #fff 80%)`,
      }}
    >
      <span
        className="font-bold h-4 pr-0.75 ml-0.5 mr-1 rounded-[4px]"
        style={{ backgroundColor: `${color}` }}
      ></span>
      {children}
    </div>
  );
};

export default ProjectType;
