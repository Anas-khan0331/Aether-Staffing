"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * PageHeader Component
 * Provides a sleek navigation anchor to return to the main directory.
 * Part of the UserInfo composite structure.
 */
const PageHeader = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 mb-8 flex items-center justify-between">
      <Link
        href="/"
        className="group flex items-center gap-4 text-slate-400 hover:text-emerald-600 transition-all duration-300"
      >
        {/* Animated Icon Container */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-emerald-100 group-hover:border-emerald-100 transition-all">
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
        </div>

        {/* Navigation Text */}
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">
            Exit to Directory
          </span>
          <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Return Home
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PageHeader;
