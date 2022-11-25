import projects from "../../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-14 md:flex-row">
      <div className="w-full md:w-3/5">
        <h2 className="mb-5 tracking-tighter text-lg text-center md:text-2xl text-gray-600 bg-[#569fbf] p-2 rounded border-b-2 border-gray-600">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-y-5">
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.title}
              description={item.description}
              technology={item.technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
