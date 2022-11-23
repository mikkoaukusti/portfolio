import education from "../../data/education";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <section className="flex flex-col justify-center px-4 py-20 bg-[#e7e0c9] md:flex-row">
      <div className="w-full md:w-3/5">
        <h2 className="mb-5 tracking-tighter text-lg text-center md:text-2xl text-gray-600 bg-[#a8cdae] p-2 rounded border-b-2 border-gray-600">
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
