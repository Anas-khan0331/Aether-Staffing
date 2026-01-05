"use client";
import React from "react";
import Link from "next/link";
import { Globe, AlertOctagon, ArrowLeft, Cpu } from "lucide-react";

/**
 * EmptyState Component
 * Triggered when a profile is not found or has been deleted.
 * Uses a "Terminal Failure" aesthetic with pulsing animations.
 */
const EmptyState = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center p-6">
      <div className="relative max-w-lg w-full">
        {/* Animated Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full" />

        <div className="relative bg-white border border-slate-200/60 rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] text-center overflow-hidden">
          {/* Decorative Corner Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
            <Cpu size={120} />
          </div>

          {/* Icon Header */}
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 bg-slate-100 rounded-[2rem] rotate-6 scale-110" />
            <div className="relative w-20 h-20 bg-slate-900 text-emerald-400 rounded-[2rem] flex items-center justify-center shadow-2xl">
              <Globe size={32} className="animate-[spin_8s_linear_infinite]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-rose-500 text-white rounded-xl flex items-center justify-center shadow-lg border-4 border-white">
              <AlertOctagon size={14} />
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-none">
            Profile <span className="text-slate-300">Expunged</span>
          </h2>
          <p className="text-sm font-medium text-slate-500 leading-relaxed mb-10 max-w-[280px] mx-auto">
            The requested personnel record is no longer active in the local
            registry or the data-link has been severed.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 hover:bg-emerald-600 hover:shadow-emerald-200 transition-all active:scale-95"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Return to Directory
          </Link>

          {/* Footer Metadata */}
          <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                Status
              </span>
              <span className="text-[10px] font-bold text-rose-500 uppercase mt-1">
                Disconnected
              </span>
            </div>
            <div className="w-px h-6 bg-slate-100" />
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                Error Code
              </span>
              <span className="text-[10px] font-bold text-slate-900 uppercase mt-1">
                404_NULL_REC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
