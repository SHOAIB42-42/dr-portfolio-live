import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection({ doctorData }) {
  return (
    <section id="experience" className="py-16 md:py-24 relative bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Clinical Work Experience
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Hospital appointments, registrar duties, and clinical leadership roles.
          </p>
        </div>

        {/* Experience List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {doctorData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all text-left flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-sky-600 mt-1 mb-4">
                  <Building2 className="w-4 h-4 text-sky-500" />
                  <span>{exp.hospital}</span>
                  <span>•</span>
                  <span className="text-slate-500 font-normal flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Highlights Bullet List */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Accomplishments:</p>
                  <ul className="space-y-2 text-xs">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
