function ProjectItem({ title, description, technology }) {
  return (
    <div className="flex flex-col px-4 py-6 border-2 border-[#1f212e] rounded md:py-10 md:px-8 xl:px-16">
      <span className="font-medium tracking-tighter text-center text-gradient md:text-xl">
        {title}
      </span>
      <p className="my-3 tracking-tighter text-gray-500 md:text-lg md:my-6 xl:my-10">
        {description}
      </p>
      <div className="flex flex-col py-4 text-center gap-y-1 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-1 md:gap-x-1.5">
        {technology.map((item, i) => (
          <span
            key={i}
            className="inline-block p-1 text-xs border text-[#b4bcd0] border-[#34363f] bg-[#1f212e] rounded md:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
