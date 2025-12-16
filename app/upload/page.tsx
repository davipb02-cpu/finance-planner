"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/ui/Sidebar";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // Mock preview data
  const mockPreviewData = [
    {
      date: "Oct 24, 2023",
      description: "Grocery Store",
      amount: -124.5,
      category: "Food",
    },
    {
      date: "Oct 23, 2023",
      description: "Monthly Rent",
      amount: -1200.0,
      category: "Housing",
    },
    {
      date: "Oct 21, 2023",
      description: "Freelance Payment",
      amount: 3450.0,
      category: "Income",
    },
  ];

  return (
    <div className="bg-background-light font-display text-text-main h-screen overflow-hidden flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto relative flex flex-col">
        {/* Top Header for Mobile (Hidden on Desktop) */}
        <div className="lg:hidden p-4 flex items-center justify-between bg-surface-light border-b border-border-color">
          <div className="font-bold text-lg font-display">FinancePlanner</div>
          <button className="p-2 text-text-main">
            <span className="text-xl">☰</span>
          </button>
        </div>

        <div className="flex-1 w-full max-w-[1024px] mx-auto p-6 md:p-10 flex flex-col gap-8">
          {/* Page Heading */}
          <header className="flex flex-col gap-2">
            <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
              Import transactions
            </h1>
            <p className="text-text-muted text-base font-normal max-w-2xl">
              Upload your bank statement CSV to automatically categorize and
              analyze your monthly expenses.
            </p>
          </header>

          {/* Upload Zone */}
          <section className="flex flex-col">
            <div
              className={`flex flex-col items-center justify-center gap-6 rounded-[2rem] border-2 border-dashed px-6 py-16 transition-colors cursor-pointer group ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border-color bg-surface-light hover:border-primary"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 bg-gray-50 rounded-full mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-4xl text-text-muted">☁️</span>
                </div>
                <p className="text-text-main text-xl font-bold leading-tight tracking-[-0.015em]">
                  Drag & drop your CSV here
                </p>
                <p className="text-text-muted text-sm font-normal">
                  Supports .csv files up to 10MB
                </p>
              </div>
              <label className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-text-main text-sm font-bold shadow-sm hover:brightness-95 transition-all cursor-pointer">
                Browse Files
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </label>
            </div>
          </section>

          {/* Preview Section */}
          {selectedFile && (
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-text-main text-xl font-bold leading-tight tracking-[-0.015em]">
                  File Preview
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-text-muted text-sm">✓</span>
                  <span className="text-xs font-medium text-text-muted">
                    statement_oct2023.csv (Parsed)
                  </span>
                </div>
              </div>

              {/* Table Container */}
              <div className="w-full overflow-hidden rounded-[1.5rem] border border-border-color bg-surface-light shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-border-color">
                      <th className="p-4 text-text-main text-sm font-bold w-[20%]">
                        Date
                      </th>
                      <th className="p-4 text-text-main text-sm font-bold w-[40%]">
                        Description
                      </th>
                      <th className="p-4 text-text-main text-sm font-bold w-[20%]">
                        Amount
                      </th>
                      <th className="p-4 text-text-main text-sm font-bold w-[20%]">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color">
                    {mockPreviewData.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-4 text-text-muted text-sm font-medium">
                          {row.date}
                        </td>
                        <td className="p-4 text-text-main text-sm font-medium">
                          {row.description}
                        </td>
                        <td
                          className={`p-4 text-sm font-mono font-medium ${
                            row.amount >= 0
                              ? "text-green-600"
                              : "text-text-main"
                          }`}
                        >
                          {row.amount >= 0 ? "+" : ""}
                          ${Math.abs(row.amount).toFixed(2)}
                        </td>
                        <td className="p-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-text-main text-xs font-bold border border-transparent">
                            {row.category}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination / Info */}
              <div className="flex justify-between items-center px-2">
                <p className="text-xs text-text-muted">Showing 3 of 48 rows</p>
              </div>
            </section>
          )}
        </div>

        {/* Sticky Action Footer */}
        <div className="sticky bottom-0 z-10 w-full bg-surface-light/80 backdrop-blur-md border-t border-border-color p-4">
          <div className="max-w-[1024px] mx-auto flex items-center justify-end gap-3">
            <Link
              href="/dashboard"
              className="h-12 px-6 rounded-full text-text-main font-bold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              disabled={!selectedFile}
              className="h-12 px-8 rounded-full bg-primary text-text-main font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Import transactions</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
