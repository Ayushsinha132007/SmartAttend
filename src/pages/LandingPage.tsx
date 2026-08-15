import { ArrowRight, CheckCircle2, MapPin, QrCode, ShieldCheck } from "lucide-react"
import Navbar from "../components/common/Navbar"

const verificationLayers = [
  {
    icon: QrCode,
    title: "Dynamic QR",
    description: "Time-bound QR codes prevent screenshots and replay attacks.",
  },
  {
    icon: MapPin,
    title: "Geofencing",
    description: "Verify that students are physically present inside the class zone.",
  },
  {
    icon: ShieldCheck,
    title: "Device Verification",
    description: "Recognize trusted devices as an additional security layer.",
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="relative isolate px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px]" />
            <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/5 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Smart attendance. Verified presence.
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Attendance you can
                <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  actually trust.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                A cloud-based attendance platform that combines dynamic QR
                verification, geofencing, device authentication and optional
                facial verification to prevent proxy attendance.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/login"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 sm:w-auto"
                >
                  Start with SmartAttend
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.07] sm:w-auto"
                >
                  Explore features
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Multi-layer verification
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Real-time monitoring
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Cloud ready
                </span>
              </div>
            </div>

            <div
              id="features"
              className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-3"
            >
              {verificationLayers.map((layer) => {
                const Icon = layer.icon

                return (
                  <div
                    key={layer.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.05]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/15">
                      <Icon size={21} />
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      {layer.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {layer.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage