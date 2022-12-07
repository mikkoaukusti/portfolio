import projects from "../../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-4 py-14 md:py-20 md:flex-row"
    >
      <div className="w-full md:w-3/5 xl:w-1/2 2xl:w-1/4">
        <h2 className="mb-5 tracking-tighter text-lg text-center md:text-2xl text-gray-800 bg-[#a0c6ff] p-2 rounded">
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
