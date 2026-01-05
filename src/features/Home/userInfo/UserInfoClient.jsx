"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import EmptyState from "./components/EmptyState";
import InfoSections from "./components/InfoSections";
import { DeleteModal, EditModal } from "./components/Modals";
import PageHeader from "./components/PageHeader";
import ProfileHero from "./components/ProfileHero";

const UserInfo = ({ userInfo, fallbackId = null }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(userInfo);
  const [checkedLocal, setCheckedLocal] = useState(!fallbackId);
  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!userInfo?.id) return;
    try {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const match = storedUsers.find((u) => u.id === userInfo.id);
      if (match) setCurrentUser(match);
    } catch (err) {
      console.error("Failed to sync with local storage", err);
    }
  }, [userInfo]);

  useEffect(() => {
    if (currentUser || !fallbackId) {
      setCheckedLocal(true);
      return;
    }
    try {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const match = storedUsers.find(
        (u) => String(u.id) === String(fallbackId)
      );
      if (match) setCurrentUser(match);
    } catch (err) {
      console.error("Failed to hydrate user from local storage", err);
    }
    setCheckedLocal(true);
  }, [currentUser, fallbackId]);

  if (!currentUser && fallbackId && !checkedLocal) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-slate-500 font-semibold">
        Loading saved profile…
      </div>
    );
  }

  if (!currentUser) return <EmptyState />;
  const handleConfirmDelete = () => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem(
      "users",
      JSON.stringify(stored.filter((u) => u.id !== currentUser.id))
    );
    toast.success("User Removed Successfully");
    router.push("/");
  };
  const handleEditUser = (updatedData) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const mergedUser = {
      ...currentUser,
      ...updatedData,
      image: updatedData.image || currentUser.image,
      address: { ...currentUser.address, ...updatedData?.address },
      company: { ...currentUser.company, ...updatedData?.company },
    };
    const updated = storedUsers.map((u) =>
      u.id === currentUser.id ? mergedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updated));
    setCurrentUser(mergedUser);
    setIsEditOpen(false);
    toast.success("Identity profile updated");
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-70 bg-gradient-to-br from-emerald-400/45 via-cyan-300/35 to-sky-400/45 floating-18" />
        <div className="absolute bottom-[-18%] left-0 w-[26rem] h-[26rem] rounded-full blur-[110px] opacity-60 bg-gradient-to-br from-rose-400/35 via-orange-300/35 to-amber-300/35 floating-20" />
        <div className="absolute top-[30%] right-[12%] w-[22rem] h-[22rem] rounded-full blur-[110px] opacity-55 bg-gradient-to-br from-indigo-400/35 via-blue-300/35 to-teal-300/35 floating-22" />
      </div>

      <div className="relative z-10">
        <PageHeader />
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-white border border-slate-200/60 rounded-[3rem] shadow-xl overflow-hidden">
            <ProfileHero
              user={currentUser}
              onEdit={() => setIsEditOpen(true)}
              onDelete={() => setIsDeleteOpen(true)}
            />
            <InfoSections user={currentUser} />
          </div>
        </div>
        <EditModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          user={currentUser}
          onSubmit={handleEditUser}
          formRef={formRef}
        />
        <DeleteModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          user={currentUser}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
};

export default UserInfo;
