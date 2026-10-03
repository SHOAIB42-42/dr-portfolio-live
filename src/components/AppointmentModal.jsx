import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Phone, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function AppointmentModal({ doctorData, isOpen, onClose, initialService = '', initialLocation = '' }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    location: initialLocation || doctorData.practiceLocations[0]?.hospitalName || '',
    date: new Date().toISOString().split('T')[0],
    slot: 'OPD Hours (08:00 AM - 03:00 PM)',
    service: initialService || 'OPD Medical Consultation',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const message = `Hello ${doctorData.name},\n\nI would like to request an appointment.\n\n*Patient Name:* ${formData.patientName}\n*Phone:* ${formData.phone}\n*Hospital Location:* ${formData.location}\n*Preferred Date:* ${formData.date}\n*Time Slot:* ${formData.slot}\n*Service Required:* ${formData.service}\n${formData.notes ? `*Medical Notes:* ${formData.notes}` : ''}`;
    
    const whatsappUrl = `https://wa.me/${doctorData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left max-h-[90vh] flex flex-col">
        
        {/* Sky Blue & Mint Green Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Book Appointment</h3>
              <p className="text-xs text-sky-100">{doctorData.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Pure Light Theme) */}
        <div className="p-6 overflow-y-auto bg-white">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Appointment Request Ready!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Click below to send your appointment details directly to {doctorData.name}'s clinic WhatsApp for instant confirmation.
              </p>
              <div className="pt-4 flex flex-col gap-3 max-w-xs mx-auto">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-500 hover:underline"
                >
                  Edit Appointment Info
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Contact Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              {/* Hospital Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Select Clinic / Hospital Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 appearance-none"
                  >
                    {doctorData.practiceLocations.map((loc) => (
                      <option key={loc.id} value={loc.hospitalName}>
                        {loc.hospitalName} ({loc.timing})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="OPD Hours (08:00 AM - 03:00 PM)">OPD Hours (8 AM - 3 PM)</option>
                    <option value="Evening Online Slot">Evening Online Slot</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Reason for Visit / Symptoms (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Diabetes checkup, blood pressure, ECG..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Proceed to Confirm Appointment</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
