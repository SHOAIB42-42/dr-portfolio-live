import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Video, 
  ClipboardCheck, 
  ShieldPlus, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ServicesSection({ doctorData, onOpenAppointment }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-sky-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-500" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Video': return <Video className="w-6 h-6 text-indigo-500" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-amber-500" />;
      case 'ShieldPlus': return <ShieldPlus className="w-6 h-6 text-emerald-500" />;
      default: return <Stethoscope className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Medical Services & Treatments
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Comprehensive outpatient care, non-invasive diagnostics, and clinical evaluations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorData.services.map((service) => (
            <div
              key={service.id}
              className="relative p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left hover:-translate-y-1"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-[11px] font-bold shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular Service</span>
                </div>
              )}

              <div>
                <div className="p-3.5 rounded-2xl bg-white shadow-sm w-fit mb-6 group-hover:scale-110 transition-transform border border-slate-200/60">
                  {getIcon(service.icon)}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
                  {service.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Action */}
              <button
                onClick={() => onOpenAppointment(service.title)}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500 hover:text-white font-bold text-sm text-slate-700 transition-colors flex items-center justify-center gap-2 border border-slate-200/80 shadow-sm group-hover:border-transparent"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
