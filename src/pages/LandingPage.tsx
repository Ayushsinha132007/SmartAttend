import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Fingerprint,
  Globe2,
  LockKeyhole,
  MapPin,
  QrCode,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
  Zap,
} from "lucide-react"
import Navbar from "../components/common/Navbar"

const verificationLayers = [
  {
    number: "01",
    icon: QrCode,
    title: "Dynamic QR",
    description:
      "Every attendance session gets a short-lived QR token that continuously changes to prevent screenshot and replay attacks.",
    tag: "Time-bound",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Geofencing",
    description:
      "Attendance is accepted only when the student's verified location falls inside the classroom's configured boundary.",
    tag: "Location verified",
  },
  {
    number: "03",
    icon: Fingerprint,
    title: "Device Identity",
    description:
      "A trusted device signature adds another layer of protection against unauthorized attendance attempts.",
    tag: "Device verified",
  },
  {
    number: "04",
    icon: ScanFace,
    title: "Face Verification",
    description:
      "Optional facial verification can be enabled for high-security attendance sessions.",
    tag: "Optional",
  },
]

const platformFeatures = [
  {
    icon: Zap,
    title: "Real-time monitoring",
    description:
      "Faculty can watch attendance activity as it happens without manually refreshing the dashboard.",
  },
  {
    icon: Wifi,
    title: "Online & offline",
    description:
      "Designed to handle unstable connectivity with secure local attendance synchronization.",
  },
  {
    icon: Globe2,
    title: "Cloud ready",
    description:
      "Built for scalable deployment with secure APIs, managed databases and cloud infrastructure.",
  },
  {
    icon: LockKeyhole,
    title: "Secure by design",
    description:
      "Role-based access, encrypted communication and server-side verification protect attendance data.",
  },
]

const stats = [
  { value: "4", label: "Verification layers" },
  { value: "<30s", label: "QR validity window" },
  { value: "24/7", label: "Cloud availability" },
]

function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] overflow-hidden">
            <div className="absolute left-[15%] top-28 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px]" />
            <div className="absolute right-[5%] top-48 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[130px]" />
            <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/5 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Smart attendance. Verified presence.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Attendance you can
                <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text pb-2 text-transparent">
                  actually trust.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
              >
                A cloud-based attendance platform that combines dynamic QR
                verification, geofencing, device authentication and optional
                facial verification to prevent proxy attendance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <a
                  href="/login"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-indigo-500/30 sm:w-auto"
                >
                  Start with SmartAttend
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#security"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.07] sm:w-auto"
                >
                  See how it works
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500"
              >
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
              </motion.div>
            </div>

            {/* Dashboard preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="relative mx-auto mt-20 max-w-6xl"
            >
              <div className="absolute -inset-10 -z-10 bg-indigo-500/10 blur-[100px]" />

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="rounded-2xl border border-white/10 bg-slate-950">
                  {/* Browser bar */}
                  <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>

                    <div className="hidden rounded-lg border border-white/5 bg-white/[0.03] px-5 py-1.5 text-xs text-slate-600 sm:block">
                      app.smartattend.cloud/dashboard
                    </div>

                    <div className="w-14" />
                  </div>

                  {/* Dashboard */}
                  <div className="grid min-h-[360px] md:grid-cols-[190px_1fr]">
                    <aside className="hidden border-r border-white/10 p-5 md:block">
                      <div className="mb-9 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                          <ShieldCheck size={17} />
                        </div>
                        <span className="text-sm font-semibold">
                          SmartAttend
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          "Overview",
                          "My Classes",
                          "Attendance",
                          "Analytics",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className={`rounded-lg px-3 py-2.5 text-xs ${
                              index === 0
                                ? "bg-indigo-500/10 font-medium text-indigo-300"
                                : "text-slate-600"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </aside>

                    <div className="p-5 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-slate-500">
                            Faculty Dashboard
                          </p>
                          <h3 className="mt-1 text-xl font-semibold">
                            Good morning, Professor
                          </h3>
                        </div>

                        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-400 sm:flex">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Live
                        </div>
                      </div>

                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="flex items-center justify-between">
                            <Users size={17} className="text-indigo-400" />
                            <span className="text-[10px] text-emerald-400">
                              +4.8%
                            </span>
                          </div>
                          <p className="mt-4 text-2xl font-semibold">43</p>
                          <p className="mt-1 text-xs text-slate-600">
                            Present today
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="flex items-center justify-between">
                            <Clock3 size={17} className="text-violet-400" />
                            <span className="text-[10px] text-slate-600">
                              Today
                            </span>
                          </div>
                          <p className="mt-4 text-2xl font-semibold">86%</p>
                          <p className="mt-1 text-xs text-slate-600">
                            Attendance rate
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="flex items-center justify-between">
                            <ShieldCheck size={17} className="text-cyan-400" />
                            <span className="text-[10px] text-emerald-400">
                              Secure
                            </span>
                          </div>
                          <p className="mt-4 text-2xl font-semibold">4/4</p>
                          <p className="mt-1 text-xs text-slate-600">
                            Verification layers
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                Live attendance
                              </p>
                              <p className="mt-1 text-xs text-slate-600">
                                Data Structures · 09:00 AM
                              </p>
                            </div>

                            <span className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[10px] text-indigo-300">
                              Active
                            </span>
                          </div>

                          <div className="mt-6">
                            <div className="mb-2 flex justify-between text-xs">
                              <span className="text-slate-500">
                                43 of 50 students
                              </span>
                              <span className="text-slate-300">86%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/5">
                              <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-3 gap-2">
                            {[
                              ["43", "Present"],
                              ["5", "Absent"],
                              ["2", "Pending"],
                            ].map(([value, label]) => (
                              <div
                                key={label}
                                className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                              >
                                <p className="text-sm font-semibold">{value}</p>
                                <p className="mt-1 text-[10px] text-slate-600">
                                  {label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">
                              Verification
                            </p>
                            <Fingerprint
                              size={17}
                              className="text-indigo-400"
                            />
                          </div>

                          <div className="mt-5 space-y-3">
                            {[
                              ["Dynamic QR", true],
                              ["Location", true],
                              ["Device", true],
                              ["Face", true],
                            ].map(([label, verified]) => (
                              <div
                                key={String(label)}
                                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                              >
                                <span className="text-xs text-slate-500">
                                  {label}
                                </span>

                                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                                  <CheckCircle2 size={13} />
                                  {verified ? "Verified" : "Pending"}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security */}
        <section
          id="security"
          className="relative border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">
                Anti-proxy architecture
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                One attendance request.
                <span className="block text-slate-500">
                  Multiple independent checks.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                SmartAttend doesn't rely on a single signal. Each attendance
                request can pass through multiple verification layers before
                the server accepts it.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {verificationLayers.map((layer, index) => {
                const Icon = layer.icon

                return (
                  <motion.div
                    key={layer.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group rounded-3xl border border-white/10 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-slate-900/70 sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/15">
                        <Icon size={22} />
                      </div>

                      <span className="text-4xl font-bold text-white/[0.04]">
                        {layer.number}
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{layer.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-slate-500">
                        {layer.tag}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {layer.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-indigo-400/10 bg-indigo-500/[0.04] p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                    Verification flow
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Student → verification → server
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The client only collects signals. Final attendance
                    validation happens on the backend.
                  </p>
                </div>

                <div className="hidden h-px w-20 bg-gradient-to-r from-indigo-400/0 via-indigo-400/40 to-indigo-400/0 lg:block" />

                <div className="flex flex-wrap gap-2">
                  {["QR", "GPS", "Device", "Face", "Server"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-400"
                      >
                        <span className="text-indigo-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section
          id="analytics"
          className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Built for academic operations
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  Turn attendance data into
                  <span className="block text-slate-500">
                    useful decisions.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                  Faculty and administrators get a clear picture of attendance
                  trends, class participation and verification activity from a
                  single dashboard.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {platformFeatures.map((feature) => {
                    const Icon = feature.icon

                    return (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <Icon size={19} className="text-cyan-400" />

                        <h3 className="mt-4 text-sm font-semibold">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-violet-500/5 blur-[90px]" />

                <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-600">
                        Attendance analytics
                      </p>
                      <p className="mt-1 text-xl font-semibold">
                        This semester
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">
                      2026
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                      >
                        <p className="text-xl font-semibold">{stat.value}</p>
                        <p className="mt-1 text-[10px] leading-4 text-slate-600">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-400">
                        Weekly attendance
                      </p>
                      <p className="text-xs text-emerald-400">+6.2%</p>
                    </div>

                    <div className="mt-7 flex h-36 items-end justify-between gap-2">
                      {[52, 68, 61, 76, 71, 88, 82].map((height, index) => (
                        <div
                          key={index}
                          className="flex h-full flex-1 items-end"
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.05,
                            }}
                            className="w-full rounded-t-lg bg-gradient-to-t from-indigo-500/30 to-indigo-400"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex justify-between text-[10px] text-slate-700">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Smartphone size={17} />
                      </div>
                      <div>
                        <p className="text-xs font-medium">Device trust</p>
                        <p className="mt-1 text-[10px] text-emerald-400">
                          98.4% verified
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <MapPin size={17} />
                      </div>
                      <div>
                        <p className="text-xs font-medium">Location</p>
                        <p className="mt-1 text-[10px] text-emerald-400">
                          96.7% verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-indigo-400/10 bg-gradient-to-br from-indigo-500/[0.12] via-violet-500/[0.06] to-cyan-400/[0.04] px-6 py-16 text-center sm:px-10 lg:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <ShieldCheck
                size={34}
                className="mx-auto text-indigo-400"
              />

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Make attendance
                <span className="text-indigo-400"> trustworthy.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Replace manual attendance workflows with a secure,
                verification-first platform built for modern classrooms.
              </p>

              <a
                href="/login"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold !text-slate-950 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Enter SmartAttend
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <ShieldCheck size={16} />
            </div>

            <span className="text-sm font-semibold">
              Smart<span className="text-indigo-400">Attend</span>
            </span>
          </div>

          <p className="text-xs text-slate-700">
            Secure attendance infrastructure for modern classrooms.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-700">
            <LockKeyhole size={13} />
            Built with security in mind
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage