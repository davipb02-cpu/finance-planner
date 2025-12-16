"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TransactionsHeader() {
  const pathname = usePathname();

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
            className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
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
            Import CSV
          </Link>
        </div>
        <Link
          href="/upload"
          className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-yellow-300 transition-colors text-text-main text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Import CSV</span>
        </Link>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-sm bg-gray-200" />
      </div>
    </header>
  );
}

