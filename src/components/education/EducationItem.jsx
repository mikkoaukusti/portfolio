function EducationItem({ year, title, description }) {
  return (
    <ul className="relative flex flex-col border-l-2 border-[#1f212e] md:flex-row">
      <li className="mx-3 my-3">
        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-2 -left-1.5 border-2 border-[#1f212e]" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 ">
          <span className="inline-block p-1 text-xs text-[#b4bcd0] bg-[#1f212e] rounded">
            {year}
          </span>
          <span className="font-medium tracking-tighter text-gradient md:text-xl">
            {title}
          </span>
        </p>
        <p className="my-2 tracking-tighter text-gray-500 md:text-lg">
          {description}
        </p>
      </li>
    </ul>
  );
}

export default EducationItem;
