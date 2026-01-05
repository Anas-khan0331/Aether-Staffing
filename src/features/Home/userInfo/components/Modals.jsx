"use client";
import React from "react";
import { Trash2, ShieldAlert, Edit3, X } from "lucide-react";
import Modal from "@/features/Home/userInfoModal";
import { UserInfoForm } from "@/components/userInfoForm";

export const EditModal = ({ isOpen, onClose, user, onSubmit, formRef }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
          <Edit3 size={18} />
        </div>
        <div>
          <span className="block text-base font-black text-slate-900 leading-none">
            Modify Profile
          </span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
            Personnel ID: {user.id}
          </span>
        </div>
      </div>
    }
    size="xl"
    confirmText="Save Identity"
    onConfirm={() => formRef.current?.requestSubmit()}
  >
    <div className="px-2 pb-4">
      <div className="mb-8 flex items-center gap-4">
        <div className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
          Secure Editor
        </div>
        <div className="h-px flex-1 bg-slate-100" />
      </div>

      <UserInfoForm
        userInfo={user}
        onSubmit={onSubmit}
        formRef={formRef}
        onCancel={onClose}
      />
    </div>
  </Modal>
);

export const DeleteModal = ({ isOpen, onClose, user, onConfirm }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    showCancel={false}
    title={
      <div className="flex items-center gap-3">
        <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
          <ShieldAlert size={18} />
        </div>
        <div>
          <span className="block text-base font-black text-slate-900 leading-none">
            Delete User
          </span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
            This action is irreversible
          </span>
        </div>
      </div>
    }
    size="md"
  >
    <div className="relative bg-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-500/5 blur-[100px] rounded-full" />

      <div className="p-10 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-rose-500/20 blur-2xl rounded-full" />
            <div className="relative w-20 h-20 bg-slate-900 rounded-8 flex items-center justify-center text-rose-500 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <ShieldAlert size={32} strokeWidth={2.5} />
            </div>
          </div>

          <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
            Confirm <span className="text-rose-600">Deletion</span>
          </h4>
          <div className="h-1 w-12 bg-rose-600 rounded-full mt-2" />
        </div>
        <div className="bg-slate-50 rounded-8 p-6 border border-slate-100 mb-8">
          <p className="text-sm font-medium text-slate-500 leading-relaxed text-center">
            You are authorizing the permanent removal of <br />
            <span className="text-slate-900 font-bold text-base underline decoration-rose-200 decoration-4 underline-offset-4">
              {user.firstName} {user.lastName}
            </span>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Action recorded in security log
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-2 group relative overflow-hidden bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-slate-200 transition-all hover:bg-rose-600 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Trash2 size={14} /> Finalize Deletion
            </span>
          </button>
        </div>
      </div>
    </div>
  </Modal>
);
