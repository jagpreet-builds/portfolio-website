import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  desc,
  image,
  link,
  github,
  tags = [],
  featured = false,
  internal = false,
}) {
  const showCode = github && github !== "#";

  return (
    <div
      className={`group relative rounded-[24px] p-[1px] transition duration-300 hover:-translate-y-1 ${
        featured
          ? "bg-gradient-to-b from-cyan-400 via-[#5870ff] to-fuchsia-500 shadow-[0_0_28px_rgba(0,240,255,0.15)]"
          : "bg-gradient-to-b from-[#5971ff] via-[#4f5ec8] to-[#8c47ff] shadow-[0_0_20px_rgba(88,112,255,0.08)]"
      }`}
    >
      <div className="h-full rounded-[23px] bg-[#24345c] px-5 pt-4 pb-4 flex flex-col">
        <div className="relative mb-4 overflow-hidden rounded-[18px] border border-white/10 bg-[#1b2342]">
          {featured && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-cyan-400/20 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-300 backdrop-blur-sm">
              REAL PROJECT
            </span>
          )}

          <img
            src={image}
            alt={title}
            className="h-[140px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <h3 className="text-[1.5rem] leading-[1.05] font-semibold font-poppins text-white mb-1">
          {title}
        </h3>

        <p className="text-white/80 text-[0.95rem] leading-7 font-poppins mb-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-sm font-poppins text-white/85"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-auto grid ${showCode ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
          {internal ? (
            <Link
              to={link}
              className="text-center rounded-full border border-cyan-400 px-4 py-3 text-base font-medium font-poppins text-white transition hover:bg-cyan-400/10"
            >
              View Project
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-full border border-cyan-400 px-4 py-3 text-base font-medium font-poppins text-white transition hover:bg-cyan-400/10"
            >
              Live Demo
            </a>
          )}

          {showCode && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-full border border-fuchsia-400 px-4 py-3 text-base font-medium font-poppins text-white transition hover:bg-fuchsia-400/10"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}