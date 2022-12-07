import education from "../../data/education";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <section
      id="education"
      className="flex flex-col justify-center px-4 py-14 md:py-20 md:flex-row"
    >
      <div className="w-full md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <h2 className="mb-5 tracking-tighter text-lg text-center md:text-2xl text-gray-800 bg-[#daeeb7] p-2 rounded">
          Education
        </h2>
        {education.map((item) => (
          <EducationItem
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

export default Education;
