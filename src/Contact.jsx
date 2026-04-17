import { Mail, MapPin, Briefcase, Send } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      title: "Email",
      value: "jagpreetsingh@example.com",
      sub: "Best for project enquiries",
      icon: Mail,
    },
    {
      title: "Location",
      value: "NSW, Australia",
      sub: "Available for remote work",
      icon: MapPin,
    },
    {
      title: "Availability",
      value: "Open to freelance work",
      sub: "Websites, portals, automation",
      icon: Briefcase,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0c2a] text-white px-6 pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto">
      <div className="py-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 h-4 w-4 rotate-12 rounded-[3px] border border-cyan-400/40" />
            <div className="absolute top-20 right-24 h-14 w-14 border border-white/10 bg-white/5" />
            <div className="absolute bottom-16 left-1/2 h-[2px] w-28 bg-cyan-400/50" />
            <div className="absolute bottom-20 right-16 h-5 w-5 bg-fuchsia-500/40 blur-[2px]" />
            <div className="absolute top-12 left-[42%] h-0 w-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#5b4bff]/70 rotate-[18deg]" />
            <div className="absolute bottom-24 left-[58%] h-0 w-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#5b4bff]/45 rotate-[85deg]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
            <div>
              <p className="text-cyan-300 font-poppins text-sm md:text-base tracking-[0.22em] uppercase mb-3">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold font-poppins leading-tight mb-5 text-white [text-shadow:0_0_18px_rgba(255,255,255,0.28)]">
                Let’s Build Something
              </h2>

              <p className="max-w-2xl text-white/85 text-base md:text-lg leading-8 font-poppins mb-8">
                I’m open to freelance work, website projects, business systems,
                and automation solutions. If you have an idea, need a redesign,
                or want help building something practical for your business, feel
                free to reach out.
              </p>

              <div className="grid gap-4 mb-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                        <Icon size={22} className="text-cyan-300" />
                      </div>

                      <div>
                        <p className="text-white text-lg font-semibold font-poppins">
                          {item.title}
                        </p>
                        <p className="text-white/85 text-sm md:text-base font-poppins">
                          {item.value}
                        </p>
                        <p className="text-white/55 text-sm font-poppins mt-1">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:jagpreetsingh@example.com"
                  className="rounded-full border border-cyan-400 px-6 py-3 text-white text-base font-medium font-poppins hover:bg-cyan-400/10 transition"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-fuchsia-400 px-6 py-3 text-white text-base font-medium font-poppins hover:bg-fuchsia-400/10 transition"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="mt-10 md:mt-16 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7">
  <div className="flex items-center gap-3 mb-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
      <Send size={22} className="text-cyan-300" />
    </div>
                <div>
                  <h3 className="text-2xl font-semibold font-poppins">
                    Start a Project
                  </h3>
                  <p className="text-white/60 text-sm font-poppins">
                    Send a quick message
                  </p>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-white/75 font-poppins mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50 font-poppins"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/75 font-poppins mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50 font-poppins"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/75 font-poppins mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="Website, portal, automation..."
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50 font-poppins"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/75 font-poppins mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell me a bit about your project..."
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50 font-poppins resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full border border-cyan-400 px-6 py-3 text-white text-base font-medium font-poppins hover:bg-cyan-400/10 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}