import { motion } from "motion/react";
import { MessageCircle, Phone, ArrowDown, MapPin, Calendar, Users, Star, Shield, Clock } from "lucide-react";

export default function Hero() {
  const handleScrollToEnquiry = () => {
    const el = document.querySelector("#booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
      {/* Background Images with slideshow/layered layout for Kerala roads & luxury cabs */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=80"
          alt="Amelia Tours Kerala backwaters tourism"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter saturate-[0.8] blur-[1px]"
          referrerPolicy="no-referrer"
        />
        {/* Visual contrast overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-amber-950/25" />
      </div>

      {/* Decorative Golden Floating blobs for Kerala gold aesthetics */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        
        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span>Kerala's Premier Taxi Service — 5.0 ★ Rated (22+ Google Reviews)</span>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl leading-tight"
        >
          Reliable Taxi Service <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
            in Kerala
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
        >
          Comfortable, Clean & Professional Taxi Services for Airport Transfers, Local Trips and Kerala Tours. Your safety and comfort is our premium standard.
        </motion.p>

        {/* Action Button Set */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <a
            href="https://wa.me/919645782800?text=Hello%20Amelia%20Tours%20and%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20your%20taxi%20services."
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-8 py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 text-base"
          >
            <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />
            <span>WhatsApp Booking</span>
          </a>
          <a
            href="tel:+919645782800"
            className="flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg border border-slate-200 active:scale-95 text-base"
          >
            <Phone className="w-5 h-5 text-emerald-600 fill-current animate-pulse" />
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* Quick Booking Feature Micro-Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pickup</h4>
                <p className="text-sm font-semibold text-white">Anywhere in Kerala</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Travel Date</h4>
                <p className="text-sm font-semibold text-white">Custom / Real-time</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Passengers</h4>
                <p className="text-sm font-semibold text-white">1 to 17 Guests</p>
              </div>
            </div>

            <button
              onClick={handleScrollToEnquiry}
              className="w-full h-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-2xl py-3 px-4 shadow-lg shadow-blue-500/20 active:scale-95 transition-all text-sm uppercase tracking-wider"
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>

        {/* Visual trust check highlights */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-slate-400 text-xs tracking-wider uppercase font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-500" />
            <span>Clean & Sanitized Fleet</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Punctual Pickups</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-500 fill-current" />
            <span>Expert Native Drivers</span>
          </div>
        </div>

        {/* Down Arrow bounce element */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-14 cursor-pointer hidden sm:flex flex-col items-center gap-1 opacity-70 hover:opacity-100"
          onClick={() => {
            const next = document.querySelector("#why-choose-us");
            next?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs tracking-widest text-slate-400 uppercase">Discover More</span>
          <ArrowDown className="w-4 h-4 text-amber-400" />
        </motion.div>

      </div>
    </div>
  );
}
