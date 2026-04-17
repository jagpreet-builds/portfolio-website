import {
  Monitor,
  Code2,
  BriefcaseBusiness,
  PenTool,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Framer Motion",
      ],
    },
    {
      title: "Programming & Backend",
      icon: Code2,
      skills: [
        "Python",
        "Object-Oriented Programming",
        "File Handling",
        "Validation Logic",
        "APIs",
      ],
    },
    {
      title: "Business Systems",
      icon: BriefcaseBusiness,
      skills: [
        "Zoho CRM",
        "Automation Workflows",
        "Lead Pipelines",
        "Portal Systems",
        "AI Assistants",
      ],
    },
    {
      title: "Design & Tools",
      icon: PenTool,
      skills: ["Figma", "Photoshop", "Git", "Vercel", "VS Code"],
    },
  ];

  return (
    <section
  id="skills"
  className="relative overflow-hidden text-white px-6 pt-28 pb-24 
  bg-[radial-gradient(circle_at_70%_20%,rgba(91,75,255,0.25),rgba(10,12,30,1)_60%)]"
>
  {/* Glow background */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#5b4bff]/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />
</div>
<div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-cyan-300 font-poppins text-sm md:text-base tracking-[0.22em] uppercase mb-3">
            What I Use
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold font-poppins leading-tight mb-4">
            Skills
          </h2>

          <p className="text-white/70 text-base md:text-lg font-poppins leading-relaxed max-w-2xl">
            A focused set of technical and business tools I use to build
            websites, digital systems, and practical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_0_24px_rgba(0,240,255,0.08)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon size={22} className="text-cyan-300" />
                  </div>

                  <h3 className="text-2xl md:text-[1.9rem] font-semibold font-poppins leading-tight">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm md:text-base font-poppins text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}