import React, { useRef, useState } from 'react';
import { X, Printer, Download, ShieldCheck, Mail, Phone, MapPin, Award, BookOpen, GraduationCap, Building2, CheckCircle2, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function CVModal({ doctorData, isOpen, onClose }) {
  const cvRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  // 1-Click High-Res Single Page Download
  const handleDownloadImage = async () => {
    if (!cvRef.current) return;
    setDownloading(true);

    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const sanitizedName = doctorData.name.replace(/[^a-zA-Z0-9]/g, '_');
      link.download = `${sanitizedName}_Medical_CV_1Page.png`;
      link.href = image;
      link.click();
    } catch (err) {
      console.error('Download Error:', err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in cv-modal-overlay">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-left max-h-[95vh] flex flex-col cv-modal-container">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0 no-print border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">1-Page Medical Curriculum Vitae</span>
              <span className="text-[11px] text-teal-400 font-semibold">Guaranteed Single-Page A4 Output</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Primary Download / Save as PDF Button */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95"
              title="Save as 1-Page PDF or Print"
            >
              <Printer className="w-4 h-4" />
              <span>Save PDF / Print (1-Page)</span>
            </button>

            {/* Download PNG Document */}
            <button
              onClick={handleDownloadImage}
              disabled={downloading}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              title="Download crisp 1-page CV image"
            >
              {downloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4 text-teal-400" />
              )}
              <span className="hidden sm:inline">PNG Image</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Capturable 1-Page A4 Medical CV Layout */}
        <div className="overflow-y-auto bg-slate-100 p-2 sm:p-6 flex justify-center">
          <div
            ref={cvRef}
            className="w-full max-w-[210mm] h-[287mm] max-h-[287mm] bg-white text-slate-900 p-6 sm:p-8 shadow-xl font-sans cv-page-a4 flex flex-col justify-between overflow-hidden"
            style={{ width: '210mm', height: '287mm', boxSizing: 'border-box' }}
          >
            <div>
              {/* Top Header Banner */}
              <div className="border-b-2 border-teal-600 pb-3 mb-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {doctorData.name}
                    </h1>
                    <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-wider">
                      PMC Verified
                    </span>
                  </div>
                  <p className="text-xs font-bold text-teal-700 mt-0.5">
                    {doctorData.title}
                  </p>
                  <p className="text-[10px] font-medium text-slate-500 mt-0.5">
                    Medical License: <strong className="text-slate-800">{doctorData.medicalRegistration.number}</strong> ({doctorData.medicalRegistration.council})
                  </p>
                </div>

                <div className="text-[10px] font-medium text-slate-600 space-y-0.5 bg-slate-50 p-2 rounded-lg border border-slate-200 shrink-0">
                  <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-teal-600 shrink-0" /> {doctorData.contact.email}</p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-teal-600 shrink-0" /> {doctorData.contact.phone}</p>
                  <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-teal-600 shrink-0" /> {doctorData.contact.address}</p>
                </div>
              </div>

              {/* Two-Column 1-Page Layout */}
              <div className="grid grid-cols-12 gap-5 items-start">
                
                {/* LEFT SIDEBAR (35% width - Education, License, Skills, Memberships) */}
                <div className="col-span-12 sm:col-span-4 space-y-3 border-r-0 sm:border-r border-slate-200 pr-0 sm:pr-3.5">
                  
                  {/* Education */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1.5 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                      <span>Education & Degrees</span>
                    </h2>
                    <div className="space-y-1.5 text-[10px]">
                      {doctorData.education.map((edu, idx) => (
                        <div key={idx} className="pb-1 border-b border-slate-100 last:border-0">
                          <div className="flex justify-between font-bold text-slate-900 leading-snug">
                            <span>{edu.degree}</span>
                            <span className="text-teal-700">{edu.year}</span>
                          </div>
                          <p className="text-[9.5px] text-slate-600 font-medium">{edu.institution}</p>
                          <p className="text-[9px] text-slate-500 italic mt-0.5">{edu.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clinical Skills */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1.5 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-teal-600" />
                      <span>Clinical Competencies</span>
                    </h2>
                    <div className="flex flex-wrap gap-1 text-[9.5px]">
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">Echocardiography (2D & Color)</span>
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">12-Lead ECG Interpretation</span>
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">Hypertension Management</span>
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">CCU & Emergency Telemetry</span>
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">Holter & Stress Testing</span>
                    </div>
                  </div>

                  {/* Memberships */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Memberships</span>
                    </h2>
                    <ul className="space-y-0.5 text-[9.5px] text-slate-700">
                      {doctorData.about.memberships.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-teal-600 font-bold">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-0.5">
                      Languages
                    </h2>
                    <p className="text-[10px] text-slate-700 font-medium">
                      {doctorData.about.languages.join(' • ')}
                    </p>
                  </div>

                </div>

                {/* RIGHT MAIN COLUMN (65% width - Profile, Clinical Experience, Publications) */}
                <div className="col-span-12 sm:col-span-8 space-y-3">
                  
                  {/* Executive Summary */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1">
                      Professional Bio
                    </h2>
                    <p className="text-[10px] leading-relaxed text-slate-700">
                      {doctorData.about.summary}
                    </p>
                  </div>

                  {/* Clinical Work Experience */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1.5 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>Clinical Appointments & Hospital Experience</span>
                    </h2>
                    <div className="space-y-1.5">
                      {doctorData.experience.map((exp, idx) => (
                        <div key={idx} className="text-[10px]">
                          <div className="flex justify-between items-baseline">
                            <span className="font-bold text-slate-900">{exp.role}</span>
                            <span className="text-[9.5px] font-bold text-teal-700">{exp.period}</span>
                          </div>
                          <p className="text-[9.5px] font-semibold text-slate-600">{exp.hospital}, {exp.location}</p>
                          <p className="text-[9.5px] text-slate-600 leading-normal mt-0.5">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Publications */}
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-wider text-teal-800 border-b border-teal-200 pb-0.5 mb-1 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                      <span>Selected Medical Publications</span>
                    </h2>
                    <ul className="space-y-1 text-[9.5px] text-slate-700">
                      {doctorData.publications.map((pub, idx) => (
                        <li key={idx} className="leading-snug">
                          <span className="font-bold text-slate-900">"{pub.title}"</span> — {pub.journal} ({pub.year}). <span className="text-teal-700 font-semibold">[{pub.role}]</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-2 pt-1 border-t border-slate-200 flex justify-between items-center text-[9px] text-slate-400">
              <span>Official Curriculum Vitae — {doctorData.name} ({doctorData.medicalRegistration.number})</span>
              <span className="font-bold text-teal-700">Page 1 of 1</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
