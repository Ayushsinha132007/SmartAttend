import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"

import { loginUser } from "../../services/auth.service"
import { useAuthStore } from "../../store/auth.store"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
})

type LoginFormData = z.infer<typeof loginSchema>

function LoginPage() {
  const navigate = useNavigate()
  const setAuth = useAuthStore((state) => state.setAuth)

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setServerError("")

    try {
      const response = await loginUser(data)

      setAuth(response.user, response.accessToken)

      navigate("/")
    } catch (error) {
      console.error("Login failed:", error)

      setServerError(
        "Unable to sign in. Please check your email and password and try again.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT PANEL */}
        <section className="relative hidden overflow-hidden lg:flex lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950" />

          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative z-10 max-w-lg px-12">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/20">
              <ShieldCheck size={25} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-400">
              SmartAttend
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight">
              Attendance built around
              <span className="block text-slate-500">
                verified presence.
              </span>
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-500">
              Secure classroom attendance powered by multiple independent
              verification layers.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Dynamic QR verification",
                "Location and device validation",
                "Real-time attendance monitoring",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-md">
            {/* MOBILE BRAND */}
            <Link to="/" className="mb-10 flex items-center gap-2.5 lg:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <ShieldCheck size={20} />
              </span>

              <span className="text-lg font-semibold">
                Smart<span className="text-indigo-400">Attend</span>
              </span>
            </Link>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              <div>
                <p className="text-sm font-medium text-indigo-400">
                  Welcome back
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Sign in to SmartAttend
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Access your attendance dashboard securely.
                </p>
              </div>

              {/* SERVER ERROR */}
              {serverError && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm leading-5 text-red-400"
                >
                  {serverError}
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
                noValidate
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                        errors.email ? "text-red-400" : "text-slate-600"
                      }`}
                    />

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@university.edu"
                      {...register("email")}
                      aria-invalid={Boolean(errors.email)}
                      className={`h-12 w-full rounded-xl border bg-slate-950/60 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:ring-4 ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-400/60 focus:ring-red-500/10"
                          : "border-white/10 focus:border-indigo-400/40 focus:ring-indigo-500/10"
                      }`}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-xs font-medium text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-medium text-indigo-400 transition hover:text-indigo-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                        errors.password
                          ? "text-red-400"
                          : "text-slate-600"
                      }`}
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      {...register("password")}
                      aria-invalid={Boolean(errors.password)}
                      className={`h-12 w-full rounded-xl border bg-slate-950/60 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-700 focus:ring-4 ${
                        errors.password
                          ? "border-red-500/50 focus:border-red-400/60 focus:ring-red-500/10"
                          : "border-white/10 focus:border-indigo-400/40 focus:ring-indigo-500/10"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-slate-300"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-2 text-xs font-medium text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-7 flex items-center gap-3 text-xs text-slate-700">
                <div className="h-px flex-1 bg-white/5" />
                Secure access
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <p className="mt-6 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage