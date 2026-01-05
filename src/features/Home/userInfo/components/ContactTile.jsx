"use client";
import React from "react";

const ContactTile = ({ icon, label, value }) => {
  return (
    <div className="group flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 cursor-default">
      <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 rounded-2xl transition-colors duration-300">
        {React.cloneElement(icon, { size: 20 })}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-0.5">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.15em] leading-none">
          {label}
        </p>
        <p className="text-sm font-black text-slate-700 tracking-tight group-hover:text-slate-900 transition-colors">
          {value || "Not Specified"}
        </p>
      </div>
    </div>
  );
};

export default ContactTile;
