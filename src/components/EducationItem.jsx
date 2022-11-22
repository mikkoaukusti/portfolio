function EducationItem({ year, title, description }) {
  return (
    <ul className="relative flex flex-col border-2 border-gray-600 rounded md:flex-row">
      <li className="mx-3 my-3">
        <div className="absolute w-3 h-3 bg-[#fffaea] rounded-full mt-2 -left-1.5 border-2 border-gray-600" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block p-1 text-xs text-white bg-gray-600 rounded">
            {year}
          </span>
          <span className="text-lg font-semibold text-gray-600">{title}</span>
        </p>
        <p className="my-2 text-base font-normal text-gray-500">
          {description}
        </p>
      </li>
    </ul>
  );
}

export default EducationItem;
