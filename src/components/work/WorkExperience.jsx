import work from "../../data/work";
import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperience() {
  return (
    <section className="flex flex-col justify-center px-4 py-10 bg-[#e7e0c9] md:flex-row">
      <div className="w-full md:w-3/5">
        <h2 className="mb-5 tracking-tighter text-lg text-center md:text-2xl text-gray-600 bg-[#e18568] p-2 rounded border-b-2 border-gray-600">
          Work experience
        </h2>
        {work.map((item) => (
          <WorkExperienceItem
            key={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
