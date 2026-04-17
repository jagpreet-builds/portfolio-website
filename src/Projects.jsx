import ProjectCard from "./project_card.jsx";
import projectsData from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0d0c2a] text-white px-6 pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-cyan-300 font-poppins text-sm md:text-base tracking-[0.22em] uppercase mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold font-poppins leading-tight mb-4">
            Projects
          </h2>

          <p className="text-white/70 text-base md:text-lg font-poppins leading-relaxed max-w-2xl">
            A selection of projects focused on web development, automation, and
            practical business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              desc={project.shortDesc}
              image={project.cardImage}
              link={`/project/${project.slug}`}
              github={project.code}
              tags={project.tools.split(", ").slice(0, 4)}
              featured={index === 0}
              internal
            />
          ))}
        </div>
      </div>
    </section>
  );
}