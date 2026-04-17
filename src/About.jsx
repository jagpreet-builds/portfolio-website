export default function About() {
  const highlights = [
    "Problem Solver",
    "Learning Backend",
    "UI/UX Focused",
    "Team Player",
    "Always eager to learn new technologies and tools",
  ];

  const timeline = [
    {
      year: "2023",
      text: "Started Bachelor’s of IT at UOW",
    },
    {
      year: "2023",
      text: "Built my first Python program",
    },
    {
      year: "2024",
      text: "Worked with data mining, SQL, and backend tech",
    },
    {
      year: "2024",
      text: "Started designing my portfolio",
    },
    {
      year: "2025",
      text: "Built real-world projects and systems",
    },
    {
      year: "2026",
      text: "Building AI systems & business automation tools",
    },
  ];

  return (
    <section
  id="about"
  className="relative overflow-hidden text-white px-6 pt-28 pb-24 
  bg-[radial-gradient(circle_at_70%_20%,rgba(91,75,255,0.25),rgba(10,12,30,1)_60%)]"
>
    {/* Glow background */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#5b4bff]/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />
</div>

  <div className="relative z-10 max-w-7xl mx-auto">
        <div className="px-6 md:px-0 py-10 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-24 h-4 w-4 rotate-12 rounded-[3px] border border-cyan-400/40" />
            <div className="absolute top-20 right-44 h-14 w-14 border border-white/10 bg-white/5" />
            <div className="absolute bottom-16 right-16 h-5 w-5 bg-fuchsia-500/40 blur-[2px]" />
            <div className="absolute bottom-12 left-1/2 h-[2px] w-28 bg-cyan-400/50" />
            <div className="absolute top-10 left-[36%] h-0 w-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#5b4bff]/70 rotate-[18deg]" />
            <div className="absolute bottom-24 left-[46%] h-0 w-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#5b4bff]/45 rotate-[85deg]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <p className="text-cyan-300 font-poppins text-sm md:text-base tracking-[0.22em] uppercase mb-3">
                Who I Am
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold font-poppins leading-tight mb-5 text-white [text-shadow:0_0_18px_rgba(255,255,255,0.28)]">
                About Me
              </h2>

              <p className="max-w-2xl text-white/88 text-base md:text-lg leading-8 font-poppins mb-8">
                I’m Jagpreet Singh, a passionate web developer blending creative
                design with logical code. I’m currently studying a Bachelor’s in
                IT with a major in Web Design & Development at UOW. I enjoy
                building modern interfaces, practical business systems, and
                digital solutions that solve real problems.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 text-white/90 font-poppins ${
                      index === highlights.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-[#6a5cff] to-fuchsia-500 relative rounded-full">
                  {timeline.map((item, index) => (
                    <div
                      key={`${item.year}-${index}`}
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        left: `${(index / (timeline.length - 1)) * 100}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="h-4 w-4 rounded-full border-2 border-[#0d0c2a] bg-[#6a5cff] shadow-[0_0_18px_rgba(106,92,255,0.8)]" />
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 min-h-[120px]">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="absolute text-center"
                      style={{
                        left: `${(index / (timeline.length - 1)) * 100}%`,
                        transform: "translateX(-50%)",
                        width: "120px",
                      }}
                    >
                      <p
                        className={`text-sm font-poppins mb-1 ${
                          item.year === "2026"
                            ? "text-cyan-300 font-semibold"
                            : "text-white/60"
                        }`}
                      >
                        {item.year}
                      </p>

                      <p className="text-white/85 text-xs md:text-sm leading-5 font-poppins">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-400 px-6 py-3 text-white text-base font-medium font-poppins hover:bg-cyan-400/10 transition"
                >
                  View Resume
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-fuchsia-400 px-6 py-3 text-white text-base font-medium font-poppins hover:bg-fuchsia-400/10 transition"
                >
                  Explore GitHub
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end pt-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/60 blur-[80px] opacity-70 scale-110" />
                <div className="relative h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-full border border-cyan-400/30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(210,210,210,0.9)_28%,rgba(120,120,120,0.55)_68%,rgba(30,30,60,0.15)_100%)] shadow-[0_0_40px_rgba(255,255,255,0.16)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}