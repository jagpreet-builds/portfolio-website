import { Link, useParams } from "react-router-dom";
import projectsData from "./projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins mb-4">
            Project not found
          </h1>
          <Link
            to="/"
            className="inline-block rounded-full border border-cyan-400 px-6 py-3 text-white font-poppins hover:bg-cyan-400/10 transition"
          >
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-cyan-300 font-poppins text-sm md:text-base tracking-[0.22em] uppercase mb-3">
            Project Detail
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold font-poppins leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-white/75 text-base md:text-lg font-poppins leading-relaxed max-w-2xl">
            {project.shortDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
              <h2 className="text-2xl font-semibold font-poppins mb-5">
                Overview
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-cyan-300 text-sm mb-1 font-poppins">
                    Project Type
                  </p>
                  <p className="text-white/85 text-sm md:text-base font-poppins leading-6">
                    {project.type}
                  </p>
                </div>

                <div>
                  <p className="text-cyan-300 text-sm mb-1 font-poppins">
                    Tools Used
                  </p>
                  <p className="text-white/85 text-sm md:text-base font-poppins leading-6">
                    {project.tools}
                  </p>
                </div>

                <div>
                  <p className="text-cyan-300 text-sm mb-1 font-poppins">
                    Duration
                  </p>
                  <p className="text-white/85 text-sm md:text-base font-poppins leading-6">
                    {project.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
              <h2 className="text-2xl font-semibold font-poppins mb-4">
                Description
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-7 font-poppins">
                {project.fullDesc}
              </p>
            </div>

            {project.features?.length > 0 && (
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
                <h2 className="text-2xl font-semibold font-poppins mb-4">
                  Key Features
                </h2>
                <div className="grid gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-white/85 text-sm md:text-base leading-7 font-poppins">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
              <h2 className="text-2xl font-semibold font-poppins mb-4">
                Challenge
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-7 font-poppins">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
              <h2 className="text-2xl font-semibold font-poppins mb-4">
                Solution
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-7 font-poppins">
                {project.solution}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
              <h2 className="text-2xl font-semibold font-poppins mb-4">
                Outcome
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-7 font-poppins">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="rounded-[28px] p-[1px] bg-gradient-to-b from-cyan-400 via-[#5d6dff] to-fuchsia-500 shadow-[0_0_24px_rgba(0,240,255,0.08)]">
              <div className="rounded-[27px] border border-white/5 bg-[#24345c] p-5">
                <div className="relative mb-4 overflow-hidden rounded-[18px] border border-white/10 bg-[#1b2342]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[180px] w-full object-cover object-center"
                  />
                </div>

                <h3 className="text-[1.9rem] leading-[1.08] font-semibold font-poppins text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/80 text-[0.98rem] leading-7 font-poppins mb-5">
                  {project.shortDesc}
                </p>

                <div className="space-y-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center rounded-full border border-cyan-400 px-4 py-2.5 text-sm font-medium font-poppins text-white transition hover:bg-cyan-400/10"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.code && project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center rounded-full border border-fuchsia-400 px-4 py-2.5 text-sm font-medium font-poppins text-white transition hover:bg-fuchsia-400/10"
                    >
                      View Code
                    </a>
                  )}

                  <Link
                    to="/"
                    className="block text-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium font-poppins text-white/85 transition hover:bg-white/5"
                  >
                    Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}