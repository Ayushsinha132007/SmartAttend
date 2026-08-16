import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const resetPasswordSchema = z
  .object({
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

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const [isReset, setIsReset] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true)
    setServerError("")

    try {
      console.log("Reset password payload:", data)

      // Backend reset-password API will be connected here later.
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsReset(true)
    } catch (error) {
      console.error("Password reset failed:", error)

      setServerError(
        "Unable to reset your password. Please try again.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          {/* BRAND */}
          <a href="/" className="mb-8 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/20">
              <ShieldCheck size={21} />
            </span>

            <span className="text-xl font-semibold">
              Smart<span className="text-indigo-400">Attend</span>
            </span>
          </a>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            {!isReset ? (
              <>
                {/* HEADER */}
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <LockKeyhole size={21} />
                  </div>

                  <p className="text-sm font-medium text-indigo-400">
                    Secure recovery
                  </p>

                  <h1 className="mt-2 text-3xl font-bold tracking-tight">
                    Create new password
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Choose a strong new password for your SmartAttend
                    account.
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

                {/* FORM */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-5"
                  noValidate
                >
                  {/* PASSWORD */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      New password
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
                      Confirm new password
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
                        placeholder="Confirm your new password"
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

                  {/* PASSWORD REQUIREMENTS */}
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                    <p className="text-xs font-medium text-slate-500">
                      Password must contain:
                    </p>

                    <div className="mt-2 space-y-1 text-xs text-slate-600">
                      <p>• At least 8 characters</p>
                      <p>• One uppercase letter</p>
                      <p>• One lowercase letter</p>
                      <p>• One number</p>
                    </div>
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
                        Resetting password...
                      </>
                    ) : (
                      <>
                        Reset password
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
                  <CheckCircle2 size={28} />
                </div>

                <p className="mt-6 text-sm font-medium text-emerald-400">
                  Password updated
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight">
                  You're all set
                </h1>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Your SmartAttend password has been updated
                  successfully. You can now sign in with your new
                  password.
                </p>

                <a
                  href="/login"
                  className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  Continue to sign in
                  <ArrowRight size={16} />
                </a>
              </div>
            )}

            {/* BACK */}
            {!isReset && (
              <div className="mt-7 border-t border-white/5 pt-6">
                <a
                  href="/forgot-password"
                  className="group flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-300"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Back to password recovery
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ResetPasswordPage