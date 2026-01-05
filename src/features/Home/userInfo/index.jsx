"use client";
import AddUserModal from "@/features/Home/components/AddUserModal";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Search,
  UserCircle,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const User = ({ users, setUsers }) => {
  const [searchUser, setSearchUser] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleFilterUser = useMemo(
    () =>
      users?.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchUser.toLowerCase());
      }),
    [users, searchUser]
  );

  const handleAddUser = (data) => {
    const newId = Date.now();
    const newUser = {
      id: newId,
      image:
        data.image ||
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${newId}`,
      ...data,
    };

    setUsers((prev) => {
      const updated = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    });

    setSearchUser("");
    toast.success("New teammate added");
    setIsAddOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden text-slate-900">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute -top-24 left-1/3 w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-70 bg-gradient-to-br from-emerald-400/45 via-cyan-300/35 to-sky-400/45 animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-18%] left-0 w-[26rem] h-[26rem] rounded-full blur-[110px] opacity-60 bg-gradient-to-br from-rose-400/35 via-orange-300/35 to-amber-300/35 animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[12%] w-[22rem] h-[22rem] rounded-full blur-[110px] opacity-55 bg-gradient-to-br from-indigo-400/35 via-blue-300/35 to-teal-300/35 animate-[float_22s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 p-4 md:p-10">
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
              <UserCircle size={14} />
              Personnel Directory
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-900">
              Meet the <span className="text-emerald-600">Experts</span>
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              Manage and explore your internal team talent.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <SearchUserInput
              searchUser={searchUser}
              setSearchUser={setSearchUser}
            />
            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="group inline-flex items-center hover:bg-emerald-600 hover:text-white p-4 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-200  active:scale-95 transition-all border border-slate-200"
            >
              <UserPlus />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {handleFilterUser?.length > 0 ? (
            <UserDetailCard users={handleFilterUser} />
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-white/50 backdrop-blur-md rounded-[3rem] border border-slate-200 shadow-inner">
              <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <p className="text-slate-500 font-bold text-lg">
                No matches found
              </p>
              <p className="text-slate-400 text-sm">
                Try adjusting your search filters.
              </p>
            </div>
          )}
        </div>
      </div>
      <AddUserModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

const UserDetailCard = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {users?.map((user) => (
        <Link
          key={user.id}
          href={`/user/${user.id}`}
          className="group relative"
        >
          <div className="h-full bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2.5rem] p-2 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col">
            <div className="bg-white rounded-[2.2rem] p-6 flex-grow border border-slate-50 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    width={64}
                    height={64}
                    src={user.image}
                    alt={user.firstName}
                    className="relative rounded-2xl bg-slate-50 border border-slate-100 shadow-sm grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">
                  {user.company.department}
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2 tracking-tight leading-tight">
                  {user.firstName} <br />
                  <span className="text-slate-400 group-hover:text-slate-900 transition-colors">
                    {user.lastName}
                  </span>
                </h2>
              </div>

              {/* Detail List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                  <Mail size={14} />
                  <span className="text-xs font-semibold truncate">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                  <MapPin size={14} />
                  <span className="text-xs font-semibold">
                    {user.address?.city || "Global"}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 group-hover:text-emerald-600 transition-colors">
                Access Dossier
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const SearchUserInput = ({ searchUser, setSearchUser }) => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-10">
        <Search className="text-slate-500 group-focus-within:text-emerald-500 transition-colors w-5 h-5" />
      </div>
      <input
        value={searchUser}
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearchUser(e.target.value)}
        className="w-full pl-12 pr-6 py-5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-4xl shadow-xl shadow-slate-200/50 outline-none focus:border-emerald-500/50 focus:ring-8 focus:ring-emerald-500/5 transition-all font-bold text-slate-700 placeholder:text-slate-300 placeholder:font-medium"
      />
    </div>
  );
};

export default User;
