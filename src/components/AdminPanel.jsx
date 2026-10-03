import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Download, 
  Upload, 
  User, 
  Phone, 
  GraduationCap, 
  Building2, 
  Stethoscope, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  Check
} from 'lucide-react';
import { presetDoctors } from '../data/presetDoctors';

export default function AdminPanel({ activeDoctor, onUpdateDoctor, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('personal');
  const [localDoctor, setLocalDoctor] = useState(activeDoctor);

  if (!isOpen) return null;

  // Sync state changes back to parent live website instantly
  const handleChange = (field, value) => {
    const updated = { ...localDoctor, [field]: value };
    setLocalDoctor(updated);
    onUpdateDoctor(updated);
  };

  const handleNestedChange = (parentField, childField, value) => {
    const updated = {
      ...localDoctor,
      [parentField]: {
        ...localDoctor[parentField],
        [childField]: value
      }
    };
    setLocalDoctor(updated);
    onUpdateDoctor(updated);
  };

  // Switch Preset Doctor
  const handleSwitchPreset = (doctorObj) => {
    setLocalDoctor(doctorObj);
    onUpdateDoctor(doctorObj);
  };

  // Create Blank Doctor Profile Template
  const handleCreateNewDoctor = () => {
    const newDoc = {
      id: `doc-${Date.now()}`,
      name: "Dr. New Doctor",
      title: "Consultant Physician & Specialist",
      tagline: "Dedicated to high quality clinical medicine and patient care.",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
      medicalRegistration: {
        number: "PMC-00000-P",
        council: "Pakistan Medical Council",
        status: "Active & Verified",
        verifiedYear: "2024"
      },
      contact: {
        email: "doctor@clinic.com",
        phone: "+92 300 0000000",
        whatsapp: "+923000000000",
        address: "Medical Center, Main Boulevard",
        emergencyContact: "+92 42 111 111 111"
      },
      stats: [
        { label: "Years Experience", value: "5+", icon: "Award" },
        { label: "Patients Treated", value: "3,000+", icon: "Users" },
        { label: "Clinical Hours", value: "1,500+", icon: "HeartPulse" },
        { label: "Research Papers", value: "5", icon: "FileText" }
      ],
      about: {
        summary: "Dr. New Doctor is a dedicated physician with expertise in clinical consultations.",
        philosophy: "Patient comfort and evidence-based care are my core priorities.",
        languages: ["English", "Urdu"],
        memberships: ["Fellow of CPSP", "Member of Medical Association"]
      },
      services: [
        {
          id: "serv-1",
          title: "OPD Consultation",
          category: "General OPD",
          description: "Routine health checkup and medical diagnosis.",
          icon: "Stethoscope",
          popular: true
        }
      ],
      education: [
        {
          degree: "MBBS",
          institution: "Medical University",
          year: "2018",
          location: "Lahore",
          details: "First Class Honors.",
          badge: "Graduation"
        }
      ],
      experience: [
        {
          role: "Senior Consultant",
          hospital: "City Hospital",
          period: "2020 - Present",
          location: "Lahore",
          type: "Full-Time",
          description: "Managing OPD and inpatient care."
        }
      ],
      practiceLocations: [
        {
          id: "loc-1",
          hospitalName: "City Hospital",
          address: "Main Medical Road",
          city: "Lahore",
          phone: "+92 42 33334444",
          timing: "Mon - Fri (05:00 PM - 08:00 PM)",
          fee: "PKR 2,000",
          mapLink: "https://maps.google.com",
          isPrimary: true
        }
      ],
      publications: [],
      testimonials: [],
      faqs: []
    };
    setLocalDoctor(newDoc);
    onUpdateDoctor(newDoc);
  };

  // Export JSON file for Client
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localDoctor, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    const fileName = `${localDoctor.name.replace(/[^a-zA-Z0-9]/g, '_')}_PortfolioData.json`;
    downloadAnchor.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON file from local computer
  const handleImportJSON = (e) => {
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && parsed.name) {
            setLocalDoctor(parsed);
            onUpdateDoctor(parsed);
            alert(`Doctor Profile "${parsed.name}" imported successfully!`);
          }
        } catch {
          alert("Invalid JSON format file.");
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-sm animate-fade-in no-print">
      <div className="w-full max-w-2xl h-full bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col text-left">
        
        {/* Admin Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight text-white">
                Super Admin Portfolio Generator
              </h3>
              <p className="text-xs text-teal-400 font-semibold">
                Generate Instant Doctor Portfolios & 1-Page PDF CVs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5"
              title="Export doctor data file as JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <label className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-3.5 h-3.5 text-teal-400" />
              <span>Import JSON</span>
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preset Doctor Profiles Quick Selector Bar */}
        <div className="p-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto shrink-0">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 shrink-0 px-2">Profiles:</span>
          {presetDoctors.map((doc) => (
            <button
              key={doc.id}
              onClick={() => handleSwitchPreset(doc)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                localDoctor.name === doc.name
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {doc.name}
            </button>
          ))}
          <button
            onClick={handleCreateNewDoctor}
            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Doctor</span>
          </button>
        </div>

        {/* Form Section Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-x-auto shrink-0 text-xs font-semibold">
          {[
            { id: 'personal', label: 'Doctor Info', icon: User },
            { id: 'contact', label: 'Contact & WA', icon: Phone },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'experience', label: 'Experience', icon: Building2 },
            { id: 'services', label: 'Services', icon: Stethoscope },
            { id: 'locations', label: 'OPD Schedule', icon: MapPin },
            { id: 'publications', label: 'Research', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 border-b-2 flex items-center gap-1.5 shrink-0 transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400 font-bold bg-white dark:bg-slate-800/40'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Form Fields */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: PERSONAL INFO */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b pb-2">
                Doctor Profile & Credentials
              </h4>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Doctor Full Name *</label>
                <input
                  type="text"
                  value={localDoctor.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Medical Title & Specialization *</label>
                <input
                  type="text"
                  value={localDoctor.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tagline Bio</label>
                <textarea
                  rows="2"
                  value={localDoctor.tagline}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Doctor Photo Image URL</label>
                <input
                  type="text"
                  value={localDoctor.avatar}
                  onChange={(e) => handleChange('avatar', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-mono text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">PMC/PMDC Reg # *</label>
                  <input
                    type="text"
                    value={localDoctor.medicalRegistration.number}
                    onChange={(e) => handleNestedChange('medicalRegistration', 'number', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Council Name</label>
                  <input
                    type="text"
                    value={localDoctor.medicalRegistration.council}
                    onChange={(e) => handleNestedChange('medicalRegistration', 'council', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT & WHATSAPP */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b pb-2">
                Contact & Direct WhatsApp Settings
              </h4>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">WhatsApp Number (For Direct OPD Booking) *</label>
                <input
                  type="text"
                  placeholder="e.g. +923001234567"
                  value={localDoctor.contact.whatsapp}
                  onChange={(e) => handleNestedChange('contact', 'whatsapp', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-mono"
                />
                <p className="text-[11px] text-slate-400 mt-1">Include country code without '+' for direct API integration (e.g. 923001234567)</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={localDoctor.contact.email}
                    onChange={(e) => handleNestedChange('contact', 'email', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={localDoctor.contact.phone}
                    onChange={(e) => handleNestedChange('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Clinic / Department Address</label>
                <input
                  type="text"
                  value={localDoctor.contact.address}
                  onChange={(e) => handleNestedChange('contact', 'address', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Emergency Call Line</label>
                <input
                  type="text"
                  value={localDoctor.contact.emergencyContact}
                  onChange={(e) => handleNestedChange('contact', 'emergencyContact', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Degrees & Certifications
                </h4>
                <button
                  onClick={() => {
                    const newEdu = [...localDoctor.education, { degree: "New Degree", institution: "Medical College", year: "2024", location: "City", details: "Honors" }];
                    handleChange('education', newEdu);
                  }}
                  className="px-3 py-1 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Degree
                </button>
              </div>

              {localDoctor.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-600">Degree #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = localDoctor.education.filter((_, i) => i !== idx);
                        handleChange('education', filtered);
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Degree (e.g. MBBS, FCPS)"
                      value={edu.degree}
                      onChange={(e) => {
                        const updated = [...localDoctor.education];
                        updated[idx].degree = e.target.value;
                        handleChange('education', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Year (e.g. 2022)"
                      value={edu.year}
                      onChange={(e) => {
                        const updated = [...localDoctor.education];
                        updated[idx].year = e.target.value;
                        handleChange('education', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Institution (e.g. King Edward Medical University)"
                    value={edu.institution}
                    onChange={(e) => {
                      const updated = [...localDoctor.education];
                      updated[idx].institution = e.target.value;
                      handleChange('education', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Clinical Work History
                </h4>
                <button
                  onClick={() => {
                    const newExp = [...localDoctor.experience, { role: "Consultant Physician", hospital: "Hospital Name", period: "2023 - Present", location: "City", description: "OPD and Inpatient management." }];
                    handleChange('experience', newExp);
                  }}
                  className="px-3 py-1 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Experience
                </button>
              </div>

              {localDoctor.experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-600">Role #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = localDoctor.experience.filter((_, i) => i !== idx);
                        handleChange('experience', filtered);
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Role (e.g. Senior Registrar)"
                    value={exp.role}
                    onChange={(e) => {
                      const updated = [...localDoctor.experience];
                      updated[idx].role = e.target.value;
                      handleChange('experience', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Hospital Name"
                      value={exp.hospital}
                      onChange={(e) => {
                        const updated = [...localDoctor.experience];
                        updated[idx].hospital = e.target.value;
                        handleChange('experience', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Period (e.g. 2021 - 2023)"
                      value={exp.period}
                      onChange={(e) => {
                        const updated = [...localDoctor.experience];
                        updated[idx].period = e.target.value;
                        handleChange('experience', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Medical Treatments & Services
                </h4>
                <button
                  onClick={() => {
                    const newServ = [...localDoctor.services, { id: `serv-${Date.now()}`, title: "New Service", category: "Consultation", description: "Specialized clinical care.", icon: "Stethoscope", popular: false }];
                    handleChange('services', newServ);
                  }}
                  className="px-3 py-1 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Service
                </button>
              </div>

              {localDoctor.services.map((serv, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-600">Service #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = localDoctor.services.filter((_, i) => i !== idx);
                        handleChange('services', filtered);
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Service Title (e.g. OPD Consultation)"
                    value={serv.title}
                    onChange={(e) => {
                      const updated = [...localDoctor.services];
                      updated[idx].title = e.target.value;
                      handleChange('services', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  />

                  <textarea
                    rows="2"
                    placeholder="Short Description"
                    value={serv.description}
                    onChange={(e) => {
                      const updated = [...localDoctor.services];
                      updated[idx].description = e.target.value;
                      handleChange('services', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  ></textarea>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: OPD LOCATIONS */}
          {activeTab === 'locations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Practice Locations & OPD Schedule
                </h4>
                <button
                  onClick={() => {
                    const newLoc = [...localDoctor.practiceLocations, { id: `loc-${Date.now()}`, hospitalName: "New Medical Hospital", address: "City Center", city: "Lahore", phone: "+92 42 0000000", timing: "Mon, Wed (05:00 PM - 08:00 PM)", fee: "PKR 2,500", mapLink: "https://maps.google.com", isPrimary: false }];
                    handleChange('practiceLocations', newLoc);
                  }}
                  className="px-3 py-1 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Location
                </button>
              </div>

              {localDoctor.practiceLocations.map((loc, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-600">Hospital #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = localDoctor.practiceLocations.filter((_, i) => i !== idx);
                        handleChange('practiceLocations', filtered);
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Hospital Name"
                    value={loc.hospitalName}
                    onChange={(e) => {
                      const updated = [...localDoctor.practiceLocations];
                      updated[idx].hospitalName = e.target.value;
                      handleChange('practiceLocations', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Timing (e.g. Mon, Wed 5-8 PM)"
                      value={loc.timing}
                      onChange={(e) => {
                        const updated = [...localDoctor.practiceLocations];
                        updated[idx].timing = e.target.value;
                        handleChange('practiceLocations', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Fee (e.g. PKR 2,500)"
                      value={loc.fee}
                      onChange={(e) => {
                        const updated = [...localDoctor.practiceLocations];
                        updated[idx].fee = e.target.value;
                        handleChange('practiceLocations', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 7: PUBLICATIONS */}
          {activeTab === 'publications' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  PubMed & Journal Papers
                </h4>
                <button
                  onClick={() => {
                    const newPub = [...localDoctor.publications, { title: "New Research Paper Title", journal: "Medical Journal", year: "2023", role: "Lead Author", link: "https://pubmed.ncbi.nlm.nih.gov/" }];
                    handleChange('publications', newPub);
                  }}
                  className="px-3 py-1 rounded-lg bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Paper
                </button>
              </div>

              {localDoctor.publications.map((pub, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-600">Paper #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const filtered = localDoctor.publications.filter((_, i) => i !== idx);
                        handleChange('publications', filtered);
                      }}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Paper Title"
                    value={pub.title}
                    onChange={(e) => {
                      const updated = [...localDoctor.publications];
                      updated[idx].title = e.target.value;
                      handleChange('publications', updated);
                    }}
                    className="w-full px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Journal Name"
                      value={pub.journal}
                      onChange={(e) => {
                        const updated = [...localDoctor.publications];
                        updated[idx].journal = e.target.value;
                        handleChange('publications', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Year (e.g. 2023)"
                      value={pub.year}
                      onChange={(e) => {
                        const updated = [...localDoctor.publications];
                        updated[idx].year = e.target.value;
                        handleChange('publications', updated);
                      }}
                      className="px-3 py-2 rounded-lg border text-xs bg-white dark:bg-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-slate-900 text-white border-t border-slate-800 text-xs flex justify-between items-center shrink-0">
          <span className="flex items-center gap-1 text-teal-400 font-bold">
            <Check className="w-4 h-4" /> Live Website Auto-Updated
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs"
          >
            Close & View Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}
