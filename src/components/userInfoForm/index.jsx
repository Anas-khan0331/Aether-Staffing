"use client";
import React, { useMemo, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building,
  Image as ImageIcon,
  X,
} from "lucide-react";
import Image from "next/image";

const emptyUser = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: {
    address: "",
    city: "",
    country: "",
  },
  company: {
    department: "",
    title: "",
  },
  image: "",
};

export const UserInfoForm = ({
  userInfo = emptyUser,
  onSubmit,
  onCancel,
  formRef,
}) => {
  const initialUser = { ...emptyUser, ...userInfo };
  const [formData, setFormData] = useState(initialUser);
  const [preview, setPreview] = useState(initialUser.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateRootField = (key) => (value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const updateNestedField = (section, key) => (value) =>
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));

  const handleImageChange = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setPreview(base64);
      setFormData((prev) => ({ ...prev, image: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setPreview("");
    setFormData((prev) => ({ ...prev, image: "" }));
  };

  const identityFields = useMemo(
    () => [
      {
        label: "First Name",
        value: formData.firstName,
        onChange: updateRootField("firstName"),
      },
      {
        label: "Last Name",
        value: formData.lastName,
        onChange: updateRootField("lastName"),
      },
      {
        label: "Email Address",
        icon: <Mail size={14} />,
        value: formData.email,
        onChange: updateRootField("email"),
      },
      {
        label: "Phone Number",
        icon: <Phone size={14} />,
        value: formData.phone,
        onChange: updateRootField("phone"),
      },
    ],
    [formData.email, formData.firstName, formData.lastName, formData.phone]
  );

  const professionalFields = useMemo(
    () => [
      {
        label: "Department",
        icon: <Building size={14} />,
        value: formData.company.department,
        onChange: updateNestedField("company", "department"),
      },
      {
        label: "Job Title",
        value: formData.company.title,
        onChange: updateNestedField("company", "title"),
      },
    ],
    [formData.company.department, formData.company.title]
  );

  const addressFields = useMemo(
    () => [
      {
        label: "Street Address",
        value: formData.address.address,
        onChange: updateNestedField("address", "address"),
        full: true,
      },
      {
        label: "City",
        value: formData.address.city,
        onChange: updateNestedField("address", "city"),
      },
      {
        label: "Country",
        value: formData.address.country,
        onChange: updateNestedField("address", "country"),
      },
    ],
    [formData.address.address, formData.address.city, formData.address.country]
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center text-slate-300">
          {preview ? (
            <Image
              src={preview}
              alt="Avatar preview"
              className="object-contain"
              width={96}
              height={96}
            />
          ) : (
            <ImageIcon size={28} />
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] shadow-md cursor-pointer hover:bg-emerald-600 transition-colors">
            <ImageIcon size={14} />
            Upload avatar
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e.target.files?.[0])}
            />
          </label>
          {preview && (
            <button
              type="button"
              onClick={clearImage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-rose-600 hover:border-rose-100 transition-colors"
            >
              <X size={14} />
              Remove
            </button>
          )}
        </div>
      </div>

      <Section
        title="Identity Details"
        icon={<User size={14} className="text-emerald-500" />}
        fields={identityFields}
        columns={2}
      />

      <Section
        title="Professional Placement"
        icon={<Briefcase size={14} className="text-emerald-500" />}
        fields={professionalFields}
        columns={2}
      />

      <Section
        title="Physical Address"
        icon={<MapPin size={14} className="text-emerald-500" />}
        fields={addressFields}
        columns={2}
      />
    </form>
  );
};

const Section = ({ title, icon, fields, columns = 2 }) => {
  const columnClass = `grid grid-cols-${columns} gap-4`;
  const chunks = [];

  fields.forEach((field, idx) => {
    if (field.full) {
      chunks.push(
        <div key={`${title}-full-${idx}`} className="col-span-full">
          <FormInput {...field} />
        </div>
      );
    } else {
      chunks.push(<FormInput key={`${title}-${idx}`} {...field} />);
    }
  });

  return (
    <div className="space-y-4">
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
        {icon} {title}
      </h4>
      <div className={columnClass}>{chunks}</div>
    </div>
  );
};

const FormInput = ({ label, value, onChange, icon, type = "text" }) => (
  <div className="space-y-1.5 group">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">
      {label}
    </label>
    <div className="relative flex items-center">
      {icon && (
        <div className="absolute left-4 text-slate-300 group-focus-within:text-emerald-500 transition-colors">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-slate-50 border border-slate-100 rounded-xl py-3 ${
          icon ? "pl-11" : "px-4"
        } pr-4 text-sm font-semibold text-slate-700 outline-none focus:bg-white focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all transition-duration-300`}
      />
    </div>
  </div>
);
