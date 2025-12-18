"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        if (signInError.message.includes("Invalid login credentials")) {
          setError("Email ou senha inválidos.");
        } else {
          setError("Erro ao realizar login. Tente novamente.");
        }
        return;
      }

      if (data.user) {
        setSuccess(true);
      }
    } catch (err) {
      setError("Erro ao realizar login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth later
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-background-light font-display text-text-main antialiased">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col relative z-10 bg-background-light p-6 md:p-12 lg:p-16 overflow-y-auto">
        {/* Header / Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="size-8 text-primary flex items-center justify-center bg-black rounded-lg">
            <span className="text-primary" style={{ fontSize: "20px" }}>
              📊
            </span>
          </div>
          <h2 className="text-text-main text-lg font-bold leading-tight tracking-tight font-display">
            FinancePlanner
          </h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 justify-center max-w-md mx-auto w-full">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-text-main text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3">
              Bem-vindo de volta
            </h1>
            <p className="text-text-muted text-base font-normal leading-normal">
              Importe seus dados e planeje sua narrativa financeira.
            </p>
          </div>

          {/* Social Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-border-color rounded-full hover:bg-gray-50 transition-colors mb-6 group"
          >
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                fill="#4285F4"
              />
              <path
                d="M12.24 24.0008C15.4766 24.0008 18.2059 22.9382 20.1904 21.1039L16.3234 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z"
                fill="#34A853"
              />
              <path
                d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                fill="#FBBC05"
              />
              <path
                d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-text-main text-sm font-medium">
              Continuar com Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border-color"></div>
            <p className="text-text-muted text-xs font-medium uppercase tracking-wide">
              Ou faça login com email
            </p>
            <div className="flex-1 h-px bg-border-color"></div>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-green-600 text-sm font-medium">
                  Login realizado com sucesso.
                </p>
              </div>
            )}

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-text-main text-sm font-medium ml-2"
                htmlFor="email"
              >
                Endereço de Email
              </label>
              <input
                className="form-input w-full h-12 px-5 bg-white border border-border-color rounded-full text-text-main placeholder-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                id="email"
                placeholder="nome@exemplo.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-text-main text-sm font-medium ml-2"
                htmlFor="password"
              >
                Senha
              </label>
              <div className="relative w-full">
                <input
                  className="form-input w-full h-12 pl-5 pr-12 bg-white border border-border-color rounded-full text-text-main placeholder-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                  id="password"
                  placeholder="Digite sua senha"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span style={{ fontSize: "20px" }}>👁️</span>
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a
                className="text-sm font-medium text-text-main hover:text-text-muted hover:text-primary transition-colors"
                href="#"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-12 mt-2 bg-primary text-black text-base font-bold rounded-full hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:active:scale-100"
              type="submit"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
              {!loading && <span style={{ fontSize: "20px" }}>→</span>}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-text-muted text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/signup"
                className="text-text-main font-bold hover:underline"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Visual */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-[55%] relative bg-gray-100 items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Overlay Content */}
        <div className="relative z-10 p-10 max-w-lg">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl transform translate-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-black">📈</span>
              </div>
              <div>
                <p className="text-sm font-bold text-text-main">Visão Mensal</p>
                <p className="text-xs text-text-muted">Patrimônio aumentou 12%</p>
              </div>
            </div>
            <div className="flex gap-2 items-end h-24 w-full px-2 pb-2 border-b border-black/5">
              <div className="w-1/5 bg-black/10 h-[40%] rounded-t-lg"></div>
              <div className="w-1/5 bg-black/10 h-[60%] rounded-t-lg"></div>
              <div className="w-1/5 bg-black/10 h-[35%] rounded-t-lg"></div>
              <div className="w-1/5 bg-black/10 h-[80%] rounded-t-lg"></div>
              <div className="w-1/5 bg-primary h-[95%] rounded-t-lg shadow-[0_0_15px_rgba(249,245,6,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
