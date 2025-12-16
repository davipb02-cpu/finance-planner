"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">F</span>
            </div>
            <h1 className="text-xl font-bold">FinancePlanner</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className={`text-sm font-medium hover:underline ${
                isActive("/dashboard") ? "font-bold border-b-2 border-text pb-1" : ""
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={`text-sm font-medium hover:underline ${
                isActive("/transactions") ? "font-bold border-b-2 border-text pb-1" : ""
              }`}
            >
              Transactions
            </Link>
            <Link
              href="/upload"
              className={`px-4 py-2 bg-primary text-text font-semibold rounded-full text-sm hover:opacity-90 transition-opacity ${
                isActive("/upload") ? "ring-2 ring-text ring-offset-2" : ""
              }`}
            >
              Import CSV
            </Link>
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}

