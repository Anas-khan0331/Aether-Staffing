"use client";
import { SquarePen, Trash2 } from "lucide-react";
import React from "react";

const ActionBtns = ({ handleOpenModal, handleDeleteModal }) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <button
        type="button"
        onClick={handleOpenModal}
        aria-label="Edit user"
        className="group relative flex items-center justify-center w-11 h-11 rounded-xl hover:bg-emerald-50 transition-all duration-300 active:scale-90"
      >
        <SquarePen className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors duration-300" />

        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg pointer-events-none">
          Modify
        </span>
      </button>
      <div className="w-px h-6 bg-slate-100 mx-1" />
      <button
        type="button"
        onClick={handleDeleteModal}
        aria-label="Delete user"
        className="group relative flex items-center justify-center w-11 h-11 rounded-xl hover:bg-rose-50 transition-all duration-300 active:scale-90"
      >
        <Trash2 className="w-5 h-5 text-slate-400 group-hover:text-rose-600 transition-colors duration-300" />
        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg pointer-events-none">
          Delete
        </span>
      </button>
    </div>
  );
};

export default ActionBtns;
