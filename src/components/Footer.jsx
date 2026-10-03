import React from 'react';
import { Stethoscope, Mail, Phone, Calendar, AlertCircle } from 'lucide-react';

export default function Footer({ doctorData, onOpenAppointment }) {
  return (
    <footer className="bg-slate-900 text-white relative py-10 border-t-4 border-sky-500 no-print text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Minimalist Footer Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Doctor Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white shadow-md shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">{doctorData.name}</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>
              <p className="text-xs text-sky-400 font-medium mt-0.5">{doctorData.title}</p>
            </div>
          </div>

          {/* Quick Contact Line & Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
            <a href={`tel:${doctorData.contact.phone}`} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{doctorData.contact.phone}</span>
            </a>
            <a href={`mailto:${doctorData.contact.email}`} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{doctorData.contact.email}</span>
            </a>

            {/* Facebook & Instagram Icons in Footer */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              {doctorData?.socials?.facebook && (
                <a
                  href={doctorData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {doctorData?.socials?.instagram && (
                <a
                  href={doctorData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={onOpenAppointment}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {doctorData.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Emergency? Call <strong>{doctorData.contact.emergencyContact || '03098382775'}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
