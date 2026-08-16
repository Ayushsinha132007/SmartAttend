import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { registerUser } from "../../services/register.service"

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name is too long"),

    email: z
      .string()
      .min(1, "Email address is required")
      .email("Enter a valid email address"),

    role: z.enum(["student", "faculty"], {
      message: "Please select your role",
    }),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[a-z]/, "Password must contain a lowercase letter")
      .regex(/[0-9]/, "Password must contain a number"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type RegisterFormData = z.infer<typeof registerSchema>

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      role: "student",
    },
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    setServerError("")
    setSuccessMessage("")

    try {
      const response = await registerUser({
        name: data.name,
        email: data.email,
        role: data.role,
        password: data.password,
      })

      console.log("Registration successful:", response)

      setSuccessMessage(
        response.message || "Account created successfully.",
      )
    } catch (error) {
      console.error("Registration failed:", error)

      setServerError(
        "Unable to create your account. Please check your details and try again.",
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
              Join a smarter
              <span className="block text-slate-500">
                attendance ecosystem.
              </span>
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-500">
              Create your secure SmartAttend account and experience
              verification-first attendance management.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Secure identity-based access",
                "Multi-layer attendance verification",
                "Real-time academic monitoring",
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
        <section className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            {/* MOBILE BRAND */}
            <a
              href="/"
              className="mb-8 flex items-center gap-2.5 lg:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <ShieldCheck size={20} />
              </span>

              <span className="text-lg font-semibold">
                Smart
                <span className="text-indigo-400">Attend</span>
              </span>
            </a>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              {/* HEADER */}
              <div>
                <p className="text-sm font-medium text-indigo-400">
                  Get started
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Set up your SmartAttend identity in a few steps.
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

              {/* SUCCESS */}
              {successMessage && (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm leading-5 text-emerald-400"
                >
                  {successMessage}
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-7 space-y-4"
                noValidate
              >
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                        errors.name
                          ? "text-red-400"
                          : "text-slate-600"
                      }`}
                    />

                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      {...register("name")}
                      aria-invalid={Boolean(errors.name)}
                      className={`h-12 w-full rounded-xl border bg-slate-950/60 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:ring-4 ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-400/60 focus:ring-red-500/10"
                          : "border-white/10 focus:border-indigo-400/40 focus:ring-indigo-500/10"
                      }`}
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-2 text-xs font-medium text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

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
                        errors.email
                          ? "text-red-400"
                          : "text-slate-600"
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

                {/* ROLE */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Account type
                  </label>

                  <select
                    id="role"
                    {...register("role")}
                    aria-invalid={Boolean(errors.role)}
                    className={`h-12 w-full rounded-xl border bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:ring-4 ${
                      errors.role
                        ? "border-red-500/50 focus:border-red-400/60 focus:ring-red-500/10"
                        : "border-white/10 focus:border-indigo-400/40 focus:ring-indigo-500/10"
                    }`}
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                  </select>

                  {errors.role && (
                    <p className="mt-2 text-xs font-medium text-red-400">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

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
                      autoComplete="new-password"
                      placeholder="Create a strong password"
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
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-slate-300"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
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

                {/* CONFIRM PASSWORD */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                        errors.confirmPassword
                          ? "text-red-400"
                          : "text-slate-600"
                      }`}
                    />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="new-password"
                      placeholder="Confirm your password"
                      {...register("confirmPassword")}
                      aria-invalid={Boolean(
                        errors.confirmPassword,
                      )}
                      className={`h-12 w-full rounded-xl border bg-slate-950/60 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-700 focus:ring-4 ${
                        errors.confirmPassword
                          ? "border-red-500/50 focus:border-red-400/60 focus:ring-red-500/10"
                          : "border-white/10 focus:border-indigo-400/40 focus:ring-indigo-500/10"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (current) => !current,
                        )
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 transition hover:text-slate-300"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <p className="mt-2 text-xs font-medium text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* DIVIDER */}
              <div className="mt-6 flex items-center gap-3 text-xs text-slate-700">
                <div className="h-px flex-1 bg-white/5" />
                Secure registration
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* LOGIN LINK */}
              <p className="mt-5 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage