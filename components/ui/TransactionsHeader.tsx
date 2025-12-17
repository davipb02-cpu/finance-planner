"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mockLogout } from "@/lib/auth";

export default function TransactionsHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    mockLogout();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color bg-surface-light px-10 py-4 sticky top-0 z-50">
      <Link href="/dashboard" className="flex items-center gap-4 text-text-main hover:opacity-80 transition-opacity">
        <div className="size-6 text-primary">
          <span className="text-3xl">💰</span>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display">
          FinancePlanner
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9 hidden md:flex">
          <Link
            href="/dashboard"
            className={`text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors ${
              pathname === "/dashboard" ? "font-bold" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className="text-text-main text-sm font-bold leading-normal border-b-2 border-primary pb-0.5"
          >
            Transactions
          </Link>
          <Link
            href="/upload"
            className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Importar CSV
          </Link>
        </div>
        <Link
          href="/upload"
          className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-yellow-300 transition-colors text-text-main text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Importar CSV</span>
        </Link>
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
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-sm bg-gray-200" />
      </div>
    </header>
  );
}
