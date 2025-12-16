"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirme sua senha";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup form submitted:", { email, password });
      // TODO: Add signup logic here
      router.push("/login");
    }
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
              Crie sua conta
            </h1>
            <p className="text-text-muted text-base font-normal leading-normal">
              Importe seus dados e planeje sua narrativa financeira.
            </p>
          </div>

          {/* Signup Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-text-main text-sm font-medium ml-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`form-input w-full h-12 px-5 bg-white border rounded-full text-text-main placeholder-text-muted focus:ring-1 focus:ring-primary focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-border-color focus:border-primary"
                }`}
                id="email"
                placeholder="nome@exemplo.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs ml-2">{errors.email}</p>
              )}
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
                  className={`form-input w-full h-12 pl-5 pr-12 bg-white border rounded-full text-text-main placeholder-text-muted focus:ring-1 focus:ring-primary focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-border-color focus:border-primary"
                  }`}
                  id="password"
                  placeholder="Digite sua senha"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors((prev) => ({ ...prev, password: undefined }));
                    }
                  }}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span style={{ fontSize: "20px" }}>👁️</span>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs ml-2">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col gap-2">
              <label
                className="text-text-main text-sm font-medium ml-2"
                htmlFor="confirmPassword"
              >
                Confirmar senha
              </label>
              <div className="relative w-full">
                <input
                  className={`form-input w-full h-12 pl-5 pr-12 bg-white border rounded-full text-text-main placeholder-text-muted focus:ring-1 focus:ring-primary focus:outline-none transition-all ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-border-color focus:border-primary"
                  }`}
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) {
                      setErrors((prev) => ({
                        ...prev,
                        confirmPassword: undefined,
                      }));
                    }
                  }}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  <span style={{ fontSize: "20px" }}>👁️</span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs ml-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-12 mt-2 bg-primary text-black text-base font-bold rounded-full hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              Criar conta
              <span style={{ fontSize: "20px" }}>→</span>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-text-muted text-sm">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-text-main font-bold hover:underline"
              >
                Entrar
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
                <p className="text-sm font-bold text-text-main">
                  Visão Mensal
                </p>
                <p className="text-xs text-text-muted">
                  Patrimônio aumentou 12%
                </p>
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
