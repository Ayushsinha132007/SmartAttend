import { ArrowRight, ShieldCheck } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6">
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-400/20">
            <ShieldCheck size={20} strokeWidth={2.2} />
          </span>

          <span className="text-lg font-semibold tracking-tight text-white">
            Smart<span className="text-indigo-400">Attend</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Features
          </a>

          <a
            href="#security"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Security
          </a>

          <a
            href="#analytics"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Analytics
          </a>
        </div>

        <a
          href="/login"
          className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold !text-slate-950 shadow-lg shadow-white/5 transition-all duration-200 hover:bg-slate-200"
        >
          <span>Get Started</span>

          <ArrowRight
            size={16}
            className="text-slate-950 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </nav>
    </header>
  )
}

export default Navbar