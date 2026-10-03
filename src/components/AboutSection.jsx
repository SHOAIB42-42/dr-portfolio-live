import React from 'react';
import { Quote, Languages, Award, ShieldCheck, HeartHandshake, Check } from 'lucide-react';

export default function AboutSection({ doctorData }) {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            About Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Background & Clinical Philosophy
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Learn more about {doctorData.name}'s medical training, values, and dedication to patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-sky-500" />
                <span>Biography</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {doctorData.about.summary}
              </p>
            </div>

            {/* Philosophy Block (Sky Blue to Sea Green Gradient) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-600 via-teal-600 to-emerald-600 text-white shadow-xl relative overflow-hidden text-left">
              <Quote className="absolute top-4 right-4 w-16 h-16 text-white/10" />
              <span className="text-xs font-bold uppercase tracking-wider text-sky-100 block mb-2">
                Care Philosophy
              </span>
              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic relative z-10">
                "{doctorData.about.philosophy}"
              </blockquote>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-sky-100 font-semibold">
                — {doctorData.name}
              </div>
            </div>

          </div>

          {/* Right Column: Credentials & Memberships */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Medical Registration & License Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Medical License</h4>
                    <p className="text-xs text-slate-500">Official Council Registration</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  {doctorData.medicalRegistration.status}
                </span>
              </div>
              <div className="space-y-2 text-sm pt-2 border-t border-slate-100">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Registration #:</span>
                  <span className="font-semibold text-slate-900">{doctorData.medicalRegistration.number}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Council:</span>
                  <span className="font-semibold text-slate-900">{doctorData.medicalRegistration.council}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Verified Since:</span>
                  <span className="font-semibold text-slate-900">{doctorData.medicalRegistration.verifiedYear}</span>
                </div>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md flex-1">
              <h4 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-500" />
                <span>Professional Memberships</span>
              </h4>
              <ul className="space-y-3 text-sm">
                {doctorData.about.memberships.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                    <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Languages Spoken */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Languages className="w-4 h-4 text-sky-500" />
                  <span>Languages Spoken</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doctorData.about.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-medium border border-sky-100">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
