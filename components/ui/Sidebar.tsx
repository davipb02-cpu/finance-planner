"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/transactions", label: "Transactions", icon: "💳" },
    { href: "/upload", label: "Import CSV", icon: "📤" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-full bg-surface-light border-r border-border-color p-6 justify-between flex-shrink-0">
      <div className="flex flex-col gap-8">
        {/* User Profile/Brand */}
        <Link href="/dashboard" className="flex gap-3 items-center hover:opacity-80 transition-opacity">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm bg-gradient-to-br from-primary to-yellow-400" />
          <div className="flex flex-col">
            <h1 className="text-text-main text-lg font-bold leading-tight font-display">
              FinancePlanner
            </h1>
            <p className="text-text-muted text-sm font-normal">Personal Edition</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
                isActive(link.href)
                  ? "bg-primary/20 text-text-main font-bold"
                  : "hover:bg-gray-50 text-text-main font-medium"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Actions or Info */}
      <div className="flex flex-col gap-3">
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Storage
            </span>
            <span className="text-xs font-bold text-text-main">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
