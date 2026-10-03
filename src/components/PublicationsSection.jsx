import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function PublicationsSection({ doctorData }) {
  return (
    <section id="publications" className="py-16 md:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            Academic Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Publications & Medical Research
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Peer-reviewed research articles published in index medical journals and conference proceedings.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {doctorData.publications.map((pub, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-md hover:shadow-xl transition-all text-left group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200">
                  {pub.role}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {pub.year}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                "{pub.title}"
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mt-3 pt-3 border-t border-slate-200/60">
                <span className="flex items-center gap-1.5 text-sky-600">
                  <BookOpen className="w-4 h-4" />
                  {pub.journal}
                </span>
                {pub.doi && (
                  <span className="font-mono text-slate-400">
                    DOI: {pub.doi}
                  </span>
                )}
              </div>

              {pub.link && (
                <div className="mt-4 flex justify-end">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline"
                  >
                    <span>Read on PubMed / Journal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
