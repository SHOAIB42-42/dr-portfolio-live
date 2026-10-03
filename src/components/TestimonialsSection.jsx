import React from 'react';
import { Star, Quote, HelpCircle, ChevronDown } from 'lucide-react';

export default function TestimonialsSection({ doctorData }) {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <section id="reviews" className="py-16 md:py-24 relative bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Patient Reviews & Recommendations
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Feedback from patients and senior clinical peers regarding treatment outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {doctorData.testimonials.map((test, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg flex flex-col justify-between text-left relative"
            >
              <Quote className="w-10 h-10 text-sky-500/10 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {test.name}
                  </h4>
                  <p className="text-xs text-sky-600 font-medium">
                    {test.relation}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 font-semibold">
                  {test.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Patient Guidance
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {doctorData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-base text-slate-900 flex justify-between items-center gap-4 hover:text-sky-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
