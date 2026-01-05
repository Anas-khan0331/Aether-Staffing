import Image from "next/image";
import { ShieldCheck, Briefcase } from "lucide-react";
import ActionBtns from "@/features/Home/components/shared/ActionBtns";

const ProfileHero = ({ user, onEdit, onDelete }) => (
  <>
    <div className="h-56 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,#10b981_0%,transparent_50%),radial-gradient(circle_at_70%_60%,#3b82f6_0%,transparent_50%)]"></div>
    </div>
    <div className="px-10 md:px-16 relative -top-20 flex flex-col md:flex-row items-center md:items-end gap-10">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-[3.2rem] blur-2xl opacity-10"></div>
        <Image
          src={user.image}
          alt={user.firstName}
          width={180}
          height={180}
          className="relative rounded-[3rem] border-[12px] border-white bg-slate-50 shadow-2xl object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left pt-4">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
          <span className="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl">
            {user.company?.department || "General Staff"}
          </span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck size={14} /> Verified Member
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-2">
          {user.firstName}{" "}
          <span className="text-slate-300">{user.lastName}</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium flex items-center justify-center md:justify-start gap-2">
          <Briefcase size={20} className="text-slate-300" />{" "}
          {user.company?.title}
        </p>
      </div>
      <div className="bg-white/60 backdrop-blur-2xl p-2.5 rounded-3xl border border-white shadow-xl">
        <ActionBtns handleDeleteModal={onDelete} handleOpenModal={onEdit} />
      </div>
    </div>
  </>
);

export default ProfileHero;
