"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mockLogout } from "@/lib/auth";

export default function DashboardHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    mockLogout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-light/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[960px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="size-8 text-primary bg-black rounded-lg flex items-center justify-center">
            <span className="text-[20px]">💰</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block font-display">
            FinancePlanner
          </h1>
        </Link>

        {/* Navigation & Month Selector & Profile */}
        <div className="flex items-center gap-4">
          {/* Navigation Links - Hidden on small screens, shown on medium+ */}
          <nav className="hidden md:flex items-center gap-6 mr-4">
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors ${
                pathname === "/dashboard"
                  ? "text-text-main font-bold border-b-2 border-primary pb-0.5"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={`text-sm font-medium transition-colors ${
                pathname === "/transactions"
                  ? "text-text-main font-bold border-b-2 border-primary pb-0.5"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Transactions
            </Link>
            <Link
              href="/upload"
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              Importar CSV
            </Link>
          </nav>

          <div className="hidden md:flex bg-background rounded-full p-1 border border-transparent hover:border-gray-200 transition-colors">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
              <span className="text-[18px]">📅</span>
              <span>Janeiro 2025</span>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
              <span className="text-[20px]">▶</span>
            </button>
          </div>
          {/* Mobile Month Only */}
          <button className="md:hidden flex items-center gap-1 bg-primary text-black px-3 py-1.5 rounded-full text-sm font-bold">
            <span>Jan '25</span>
            <span className="text-[16px]">▼</span>
          </button>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-color text-sm font-bold text-text-main hover:bg-gray-100 transition-colors disabled:opacity-60"
          >
            <span className="text-[18px]">↩</span>
            <span>{isLoggingOut ? "Saindo..." : "Logout"}</span>
          </button>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="md:hidden size-10 rounded-full bg-gray-200 border-2 border-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center text-base font-bold disabled:opacity-60"
            aria-label="Logout"
          >
            ↩
          </button>
        </div>
      </div>
    </header>
  );
}
