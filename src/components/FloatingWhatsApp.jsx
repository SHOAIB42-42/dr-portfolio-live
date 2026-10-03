import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FloatingWhatsApp({ doctorData }) {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNum = doctorData?.contact?.whatsapp || '923098382775';
  const doctorName = doctorData?.name || 'Dr. Farooq Anwar Chatha';

  const defaultMessage = `Hello ${doctorName}, I would like to inquire about an OPD consultation / diabetes remission therapy.`;
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print flex flex-col items-end gap-2">
      
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2 animate-bounce-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Chat with Dr. Farooq on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Official WhatsApp Green Brand Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-emerald-600/50 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        title={`Chat with ${doctorName} on WhatsApp`}
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        {/* Official WhatsApp SVG Brand Logo */}
        <svg className="w-8 h-8 fill-white relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.195 4.301-1.127zm10.742-5.617c-.29-.145-1.716-.847-1.982-.944-.267-.097-.461-.145-.655.145-.194.29-.752.944-.922 1.138-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.448-1.721-1.618-2.012-.17-.29-.018-.447.127-.591.131-.13.29-.34.435-.509.145-.17.194-.29.29-.484.097-.194.048-.363-.024-.509-.073-.145-.655-1.574-.897-2.155-.236-.566-.476-.489-.655-.498-.17-.008-.363-.008-.557-.008s-.509.073-.775.363c-.267.29-1.017.994-1.017 2.427 0 1.433 1.042 2.815 1.187 3.009.145.194 2.053 3.136 4.973 4.397.695.3 1.238.48 1.662.614.698.221 1.334.19 1.836.115.56-.084 1.716-.701 1.958-1.378.242-.677.242-1.258.17-1.378-.073-.12-.267-.194-.557-.339z"/>
        </svg>
      </a>

    </div>
  );
}
