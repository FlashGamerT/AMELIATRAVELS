import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips 3 seconds after landing to invite customer enquiries
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const defaultText = encodeURIComponent("Hello Amelia Tours and Travels, I would like to enquire about your taxi services.");
    window.open(`https://wa.me/919645782800?text=${defaultText}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      
      {/* Dynamic invitation tooltip with animation */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="bg-white p-3.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 text-left max-w-xs relative"
          >
            {/* Close tooltip flag */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1.5 -right-1.5 p-1 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Minor Icon */}
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm shadow-emerald-500/20 animate-bounce">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-3.313l.358.212c1.472.871 3.179 1.33 4.935 1.331 5.233 0 9.493-4.259 9.495-9.493.001-2.536-1.012-4.921-2.852-6.762-1.839-1.84-4.225-2.853-6.76-2.854-5.233 0-9.493 4.26-9.496 9.493-.001 1.848.531 3.655 1.542 5.23l.232.361-1.01 3.687 3.778-.991z" />
              </svg>
            </div>

            <div className="cursor-pointer" onClick={handleWhatsApp}>
              <p className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-wider">Book Amelia Taxi</p>
              <h5 className="text-xs font-black text-slate-800 mt-0.5">WhatsApp Now</h5>
              <p className="text-[9px] text-slate-400 font-light leading-none mt-1">Get custom rates in under 5 minutes!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating circle trigger button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/25 transition-all cursor-pointer relative"
        title="Chat with representation over official WhatsApp"
        aria-label="Interactive WhatsApp Helpline"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="fill-white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-3.313l.358.212c1.472.871 3.179 1.33 4.935 1.331 5.233 0 9.493-4.259 9.495-9.493.001-2.536-1.012-4.921-2.852-6.762-1.839-1.84-4.225-2.853-6.76-2.854-5.233 0-9.493 4.26-9.496 9.493-.001 1.848.531 3.655 1.542 5.23l.232.361-1.01 3.687 3.778-.991z" />
        </svg>

        {/* Pulse beacon */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full" />
      </button>

    </div>
  );
}
