import { Mail, MapPin, Calendar, Globe } from "lucide-react";

import UserDetailsForm from "@/components/userDetailsForm";
import ContactTile from "./ContactTile";

const InfoSections = ({ user }) => (
  <div className="px-10 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-4">
    <div className="lg:col-span-7 space-y-12">
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-slate-100"></div>
          <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Core Competencies
          </h3>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <UserDetailsForm userInfo={user} />
      </section>
    </div>
    <div className="lg:col-span-5 space-y-6">
      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">
        Connect & Locate
      </h3>
      <ContactTile icon={<Mail />} label="Email Address" value={user.email} />
      <ContactTile
        icon={<MapPin />}
        label="Primary Office"
        value={user.address?.city || "Remote HQ"}
      />
      <ContactTile
        icon={<Calendar />}
        label="Joined Team"
        value="January 2024"
      />
      <div className="mt-10 p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-2xl relative overflow-hidden group">
        <Globe
          className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform duration-700"
          size={160}
        />
        <p className="text-emerald-200 text-[10px] font-bold uppercase tracking-widest mb-2">
          Internal Note
        </p>
        <p className="text-lg font-bold leading-snug relative z-10">
          Verified internal staff directory member.
        </p>
      </div>
    </div>
  </div>
);

export default InfoSections;
