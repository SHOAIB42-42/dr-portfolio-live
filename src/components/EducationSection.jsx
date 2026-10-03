import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function EducationSection({ doctorData }) {
  return (
    <section id="education" className="py-16 md:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Education & Board Certifications
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Academic degrees, board certifications, and specialized postgraduate clinical training.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line for timeline */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-teal-500 to-emerald-500" />

          <div className="space-y-8">
            {doctorData.education.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                
                {/* Timeline node icon */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-600 text-white items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform z-10">
                  <GraduationCap className="w-8 h-8" />
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-md hover:shadow-xl transition-all text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
                      {edu.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm font-semibold text-sky-600 mt-1 flex items-center gap-1.5">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mt-4 pt-4 border-t border-slate-200/60">
                    {edu.details}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
