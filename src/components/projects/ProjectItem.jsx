function ProjectItem({ title, description, technology }) {
  return (
    <div className="flex flex-col px-4 py-6 border-2 border-gray-600 rounded">
      <span className="font-medium tracking-tighter text-center text-gray-600 md:text-xl">
        {title}
      </span>
      <p className="my-3 tracking-tighter text-gray-500 md:text-lg">
        {description}
      </p>
      <div className="flex flex-col text-center py-4 gap-y-1 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-1">
        {technology.map((item, i) => (
          <span
            key={i}
            className="inline-block p-1 text-xs border-2 text-gray-500 border-gray-500 bg-[#fffaea] rounded md:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
