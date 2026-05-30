import React from "react";
import { motion } from "motion/react";
import {
  PlaneTakeoff,
  Navigation,
  Compass,
  Map,
  Users,
  Train,
  Briefcase,
  Building2,
  ArrowRight,
  Shuffle,
  Compass as CompassIcon,
  HelpCircle,
  Sparkles,
  ArrowRightCircle
} from "lucide-react";
import { SERVICES } from "../data";

// Map icon strings to actual Lucide-React icon components safely
const iconMap: Record<string, React.ComponentType<any>> = {
  PlaneTakeoff: PlaneTakeoff,
  Navigation: Navigation,
  Compass: Compass,
  Map: Map,
  Users: Users,
  Train: Train,
  Briefcase: Briefcase,
  Building2: Building2,
  ArrowRight: ArrowRight,
  Shuffle: Shuffle,
};

export default function Services() {
  const handleEnquire = (serviceTitle: string) => {
    // 1. Search for form select element
    const selectEl = document.querySelector("#enquiry-service-type") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = serviceTitle;
      // Trigger native change event if React listener is present
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
    // 2. Scroll smoothly to form
    const formEl = document.querySelector("#booking-enquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual cues */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Versatile Cab Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight"
          >
            Our Professional Taxi Services
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-4 rounded-full origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-slate-300 font-light text-base sm:text-lg"
          >
            Whether it's a short airport run, a corporate appointment, or a luxury vacation tour, Amelia Tours and Travels delivers ultimate reliability across Kerala.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => {
            const IconComponent = iconMap[srv.iconName] || HelpCircle;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md relative overflow-hidden"
              >
                {/* Subtle Hover Glow background corner */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-bl-full transition-colors duration-300 pointer-events-none" />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-blue-500/10 group-hover:bg-blue-600 group-hover:text-slate-950 text-blue-400 rounded-2xl transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans font-extrabold text-white text-xl mb-3 tracking-tight group-hover:text-amber-300 transition-colors duration-300">
                    {srv.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Card action button */}
                <button
                  onClick={() => handleEnquire(srv.title)}
                  className="w-full flex items-center justify-between bg-slate-900 border border-slate-800 hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-slate-950 text-slate-300 font-bold px-4 py-3 rounded-xl transition-all active:scale-[0.98] text-xs uppercase tracking-wider cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRightCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Accent Banner */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-base font-light mb-4">
            Need a service not listed here, or seeking private tour customized itinerary consultation?
          </p>
          <a
            href="https://wa.me/919645782800?text=Hello%20Amelia%20Tours%20and%20Travels%2C%20I%20have%20a%20special%20custom%20taxi%20requirements..."
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm tracking-wider uppercase border-b border-dashed border-amber-400 hover:border-amber-300 py-1"
          >
            Discuss Custom Requirements on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
