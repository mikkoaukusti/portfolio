import projects from "../data/projects.json";

function Projects() {
  return (
    <section className="px-4 pt-20 bg-cyan-300">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl text-gray-600 underline">Projects</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pt-6 text-lg tracking-wider text-center text-gray-600">
          Here is a list of projects I have involved in:
        </p>
        <div className="grid grid-cols-1 pt-6 gap-y-3">
          {projects &&
            projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="p-3 border-2 border-gray-600 rounded-lg bg-cyan-200"
                >
                  <p className="text-lg text-gray-600">{project.name}</p>
                  <p className="pt-2 text-sm text-gray-600">
                    {project.description}
                  </p>
                  <p className="pt-2 text-sm text-gray-600">{project.client}</p>
                  <p className="pt-2 text-xs text-gray-600">
                    {project.github === true
                      ? "Source code: Public"
                      : "Source code: Private"}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
