"use client";
import { useRef } from "react";
import { UserPlus } from "lucide-react";
import Modal from "@/features/Home/userInfoModal";
import { UserInfoForm } from "@/components/userInfoForm";

const AddUserModal = ({ isOpen, onClose, onSubmit }) => {
  const formRef = useRef(null);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      confirmText="Add teammate"
      onConfirm={() => formRef.current?.requestSubmit()}
      title={
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
            <UserPlus size={18} />
          </div>
          <div>
            <span className="block text-base font-black text-slate-900 leading-none">
              Add new teammate
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Create a profile from scratch
            </span>
          </div>
        </div>
      }
    >
      <div className="px-2 pb-4">
        <div className="mb-8 flex items-center gap-4">
          <div className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
            Secure Intake
          </div>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <UserInfoForm
          userInfo={undefined}
          onSubmit={onSubmit}
          formRef={formRef}
          onCancel={onClose}
        />
      </div>
    </Modal>
  );
};

export default AddUserModal;
