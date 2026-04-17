import Navbar from "./navbar";

export default function PageShell({ children, showNavbar = true }) {
  return (
    <div className="min-h-screen bg-[#0d0c2a] text-white relative overflow-hidden">
      {/* Shared background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-[#6a5cff]/20 blur-[120px]" />
        <div className="absolute top-[18%] left-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[12%] h-[260px] w-[260px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

        <div className="absolute top-20 left-24 h-4 w-4 rotate-12 rounded-[3px] border border-cyan-400/30" />
        <div className="absolute top-28 right-28 h-14 w-14 border border-white/10 bg-white/5" />
        <div className="absolute bottom-24 left-[52%] h-[2px] w-28 bg-cyan-400/40" />
        <div className="absolute bottom-20 right-20 h-5 w-5 bg-fuchsia-500/30 blur-[2px]" />
        <div className="absolute top-16 left-[34%] h-0 w-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#5b4bff]/60 rotate-[18deg]" />
        <div className="absolute bottom-28 left-[58%] h-0 w-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#5b4bff]/40 rotate-[85deg]" />
      </div>

      {showNavbar && <Navbar />}

      <main className="relative z-10">{children}</main>
    </div>
  );
}