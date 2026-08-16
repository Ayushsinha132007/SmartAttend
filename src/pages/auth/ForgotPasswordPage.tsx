import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { forgotPassword } from "../../services/password.service"

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Enter a valid email address"),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true)
    setServerError("")

    try {
      await forgotPassword({
        email: data.email,
      })

      setSubmitted(true)
    } catch (error) {
      console.error("Forgot password failed:", error)

      setServerError(
        "Unable to process your request. Please try again.",
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
            {!submitted ? (
              <>
                {/* HEADER */}
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail size={21} />
                  </div>

                  <p className="text-sm font-medium text-indigo-400">
                    Account recovery
                  </p>

                  <h1 className="mt-2 text-3xl font-bold tracking-tight">
                    Forgot your password?
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Enter the email address associated with your SmartAttend
                    account and we'll help you reset your password.
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        Continue
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
                  Request received
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight">
                  Check your inbox
                </h1>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  If an account exists with that email address, you'll
                  receive instructions to reset your password.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setServerError("")
                  }}
                  className="mt-7 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                  Try another email
                </button>
              </div>
            )}

            {/* BACK TO LOGIN */}
            <div className="mt-7 border-t border-white/5 pt-6">
              <a
                href="/login"
                className="group flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-300"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back to sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ForgotPasswordPage