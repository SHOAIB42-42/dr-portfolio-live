import React from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Award, 
  Users, 
  HeartPulse, 
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ doctorData, onOpenAppointment, onOpenCV }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-sky-500" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'FileText': return <FileText className="w-5 h-5 text-indigo-500" />;
      default: return <Award className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50">
      {/* Background Lighting Gradients (Sky Blue + Mint Green Glow) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-sky-400/20 via-teal-300/20 to-emerald-400/20 blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Medical Verified Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              <span>{doctorData.medicalRegistration.council} • Reg: {doctorData.medicalRegistration.number}</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {doctorData.name}
            </h1>

            {/* Title & Specialties (Sky Blue to Sea Green Gradient) */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              {doctorData.title}
            </h2>

            {/* Tagline Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {doctorData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              
              {/* Primary Appointment Button */}
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              {/* Direct WhatsApp Chat */}
              <a
                href={`https://wa.me/${doctorData.contact.whatsapp}?text=Hello%20${encodeURIComponent(doctorData.name)},%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </a>

              {/* View/Print Resume CV */}
              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-sky-50 text-slate-700 font-bold text-sm shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>View 1-Page CV</span>
              </button>

            </div>

            {/* Quick Trust Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> MBBS / MD & PMDC Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> OPD & Emergency Consults
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Medical License
              </span>
            </div>

          </div>

          {/* Right Column: 3D OUT-OF-FRAME DOCTOR AVATAR (Sky Blue + Mint Green Arch) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md pt-12">
              
              {/* Outer Glowing Gradient Halo Ring */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sky-400 via-teal-300 to-emerald-400 opacity-25 blur-2xl pointer-events-none"></div>

              {/* Sky Blue & Sea Green Rounded Arch Frame Background */}
              <div className="relative rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-sky-100 via-teal-50/80 to-emerald-100/60 border-2 border-sky-300/60 shadow-2xl pt-16 px-6 pb-6 text-center">
                
                {/* 3D OUT-OF-FRAME CUTOUT IMAGE CONTAINER */}
                <div className="relative -mt-36 sm:-mt-40 mb-4 flex justify-center">
                  
                  {/* Doctor Portrait Image (Popping UP & OUT of the Arch) */}
                  <img
                    src={doctorData.avatar}
                    alt={doctorData.name}
                    className="w-64 h-80 sm:w-72 sm:h-96 object-cover object-top filter drop-shadow-[0_20px_25px_rgba(14,165,233,0.3)] transition-transform duration-500 hover:scale-105"
                  />
                  
                </div>

                {/* Bottom Doctor Details Card Inside Frame */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-xl text-center">
                  <h3 className="text-base font-extrabold text-slate-900">
                    {doctorData.name}
                  </h3>
                  <p className="text-xs text-sky-600 font-semibold mt-0.5">
                    {doctorData.title}
                  </p>
                </div>

              </div>

              {/* FLOATING BADGE 1 (Top Left): OPD Available Live Status */}
              <div className="absolute top-4 -left-3 sm:-left-6 z-20 bg-slate-900 text-white px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-2xl border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>OPD Open Today</span>
              </div>

              {/* FLOATING BADGE 2 (Bottom Right): 4.9 Star Rating & Patients */}
              <div className="absolute bottom-6 -right-3 sm:-right-6 z-20 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xl flex items-center gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-extrabold text-slate-900 text-sm">
                    <span>4.9 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Verified Patient Rating
                  </p>
                </div>
              </div>

              {/* FLOATING BADGE 3 (Top Right): PMC Verified Crest */}
              <div className="absolute top-16 -right-4 z-20 p-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-xl flex items-center gap-2 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>PMC Verified</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {doctorData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-sky-50">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
