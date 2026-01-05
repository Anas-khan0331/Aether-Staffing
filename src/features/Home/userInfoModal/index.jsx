"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = "Save Changes",
  confirmButtonClassName = "rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95",
  size = "md",
  showCancel = true,
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    full: "max-w-[95vw]",
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    const handleEsc = (e) => {
      e.key === "Escape" && onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div
        className={`relative w-full ${sizeClasses[size]} overflow-hidden rounded-[2.5rem] bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 border border-white/20`}
      >
        {/* HEADER: Stronger Gradient */}
        <div className="relative bg-gradient-to-b from-slate-100 to-white px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {title}
              </h3>
              <div className="h-1 w-8 bg-emerald-500 rounded-full mt-1"></div>
            </div>
            <button
              onClick={onClose}
              className="group rounded-full p-2 bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-all"
            >
              <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="max-h-[65vh] overflow-y-auto px-8 py-8 text-slate-600 custom-scrollbar bg-white">
          {children}
        </div>

        {/* FOOTER: Stronger Gradient (Tinted Emerald) */}
        <div className="flex items-center justify-end gap-4 bg-gradient-to-t from-emerald-50 via-white to-white px-8 py-6 border-t border-slate-100">
          {showCancel && (
            <button
              onClick={onClose}
              className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors px-4"
            >
              Cancel
            </button>
          )}
          {onConfirm && (
            <button onClick={onConfirm} className={confirmButtonClassName}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
