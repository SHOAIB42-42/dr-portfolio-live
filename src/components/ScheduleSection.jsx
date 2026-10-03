import React, { useState } from 'react';
import { Building, MapPin, Clock, Phone, ExternalLink, Calendar } from 'lucide-react';

export default function ScheduleSection({ doctorData, onOpenAppointment }) {
  const [selectedLocId, setSelectedLocId] = useState(
    doctorData.practiceLocations.find(l => l.isPrimary)?.id || doctorData.practiceLocations[0]?.id
  );

  const activeLoc = doctorData.practiceLocations.find(l => l.id === selectedLocId) || doctorData.practiceLocations[0];

  return (
    <section id="schedule" className="py-16 md:py-24 relative bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            OPD Timings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Practice Locations & Clinic Hours
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Select a hospital location below to view OPD consulting days, timings, and address.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {doctorData.practiceLocations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocId(loc.id)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2.5 border ${
                selectedLocId === loc.id
                  ? 'bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 text-white border-transparent shadow-lg shadow-sky-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-sky-50'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>{loc.hospitalName}</span>
              {loc.isPrimary && (
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] uppercase font-extrabold">
                  Main
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Location Detail Card */}
        {activeLoc && (
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3 inline-block">
                    In-Person Consultation
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeLoc.hospitalName}
                  </h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{activeLoc.address}</span>
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Consultation Schedule</p>
                      <p className="text-base font-bold text-slate-900 mt-0.5">{activeLoc.timing}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Hospital Appointment Desk</p>
                      <a href={`tel:${activeLoc.phone}`} className="text-base font-bold text-sky-600 hover:underline mt-0.5 inline-block">
                        {activeLoc.phone}
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side: Fee & Direct Booking CTA */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-sky-50/60 border border-sky-100 text-center flex flex-col justify-center items-center space-y-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">Consultation Fee</span>
                  <span className="text-3xl font-extrabold text-slate-900 mt-1 block">{activeLoc.fee}</span>
                </div>

                <button
                  onClick={() => onOpenAppointment(activeLoc.hospitalName)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book at {activeLoc.hospitalName}</span>
                </button>

                {activeLoc.mapLink && (
                  <a
                    href={activeLoc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-sky-600 hover:underline flex items-center gap-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
