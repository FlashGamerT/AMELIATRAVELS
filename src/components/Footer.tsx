import { Star, Phone, MessageSquare, MapPin, Compass, Shield, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-white mt-12 border-t border-slate-800">
      
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="flex items-center gap-2">
              <span className="font-sans font-extrabold tracking-tight text-2xl text-blue-500 bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
                Amelia
              </span>
              <span className="font-sans font-light tracking-wide text-sm text-slate-300">
                Tours & Travels
              </span>
            </span>
            
            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Your trusted partner for clean, professional, and budget-friendly chauffeur-driven cab hires. Serving Kozhikode, Kochi, Munnar, and every corner of Kerala comfortably since inception.
            </p>

            <div className="flex items-center gap-1.5 mt-4 text-amber-500 text-xs font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>5.0 Star Rated Team on Google (22 reviews)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-sans font-black text-slate-200 text-xs uppercase tracking-widest border-b border-slate-800 pb-2 w-full">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-amber-400 transition-colors">
                  Return to Top
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#why-choose-us")} className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#services")} className="hover:text-amber-400 transition-colors">
                  Our core services
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#fleet")} className="hover:text-amber-400 transition-colors">
                  Our elite vehicles
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#destinations")} className="hover:text-amber-400 transition-colors">
                  Kerala Destinations
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-sans font-black text-slate-200 text-xs uppercase tracking-widest border-b border-slate-800 pb-2 w-full">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400 leading-normal">
              <li>• Airport Pickup & Drops (COK, CCJ, TRV)</li>
              <li>• Kerala Custom Multi-day Packages</li>
              <li>• One Way Drop Taxis (Pay one way)</li>
              <li>• Full Day Outstation Sightseeings</li>
              <li>• Executive & Corporate Cabin Hire</li>
              <li>• Comfortable Family Van Hires</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left text-xs">
            <h4 className="font-sans font-black text-slate-200 text-xs uppercase tracking-widest border-b border-slate-800 pb-2 w-full">
              Main Office
            </h4>
            
            <div className="mt-4 space-y-3 text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Thonikkallupara, Vettukad Rd, Kerala 673638, India</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-slate-200">+91 96457 82800</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400 shrink-0" />
                <span>24/7 WhatsApp Bookings</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Copyright Row */}
      <div className="bg-slate-950 border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © 2026 Amelia Tours and Travels. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] uppercase font-bold tracking-wider">
            <span className="hover:text-slate-300">Clean Fleet</span>
            <span>•</span>
            <span className="hover:text-slate-300">Verified Captains</span>
            <span>•</span>
            <span className="hover:text-slate-300">Kozhikode, India</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
