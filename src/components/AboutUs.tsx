import { Shield, Sparkles, UserCheck, Clock, Award, PhoneCall, Heart, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const features = [
    {
      title: "Clean & Sanitized Vehicles",
      desc: "Our vehicles undergo a deep sanitization cleanup cycle before and after every single passenger booking. Pristine interiors, fresh fragrance, and clean seatcovers.",
      icon: Sparkles,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Professional Drivers",
      desc: "Courteous, verified, native drivers who possess comprehensive geographic and cultural knowledge of Kerala's routes and sightseeings.",
      icon: UserCheck,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "On-Time Pickup",
      desc: "We value your time immensely. Whether it's a tight late-night flight connection or a morning train transfer, our driver will reach prior to scheduled pickup.",
      icon: Clock,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Affordable Rates",
      desc: "Absolute pricing honesty with completely transparent estimates. Zero hidden extra fees, zero surprises, and budget-friendly competitive options.",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "24/7 Support Desk",
      desc: "Experienced booking advisors available via WhatsApp or cellular call representing ultimate convenience around the clock, anywhere.",
      icon: PhoneCall,
      color: "text-pink-600 bg-pink-50 border-pink-100",
    },
    {
      title: "Safe Family Travel",
      desc: "Our drivers maintain flawless safe driving histories. Comfortable baby seats and extra attention to senior citizens to keep family travel peaceful.",
      icon: Heart,
      color: "text-red-600 bg-red-50 border-red-100",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Decorative Blur BG Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Trusted Professional Fleet</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight"
          >
            Why Choose Amelia Tours and Travels?
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mt-4 rounded-full origin-left"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-light"
          >
            Amelia Tours and Travels is a highly trusted taxi service provider in Kerala offering spotlessly clean vehicles, professional drivers, punctual pickups, and comfortable travel experiences. We focus strictly on customer satisfaction, safety, and highly affordable budget pricing.
          </motion.p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.05)" }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-blue-100 transition-all duration-300 shadow-sm relative group"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />
                
                <div className={`p-3 rounded-2xl inline-flex border ${feat.color} mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-sans font-extrabold text-slate-900 text-lg mb-3 tracking-tight">
                  {feat.title}
                </h3>
                
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {feat.desc}
                </p>
                
                {/* Verified indicator */}
                <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-blue-600 font-semibold">
                  <BadgeCheck className="w-4 h-4 fill-current text-white" />
                  <span>Amelia Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Badge Row */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-amber-500/5 blur-3xl pointer-events-none" />
          
          <div className="text-left max-w-xl">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-amber-400 tracking-tight">
              A Hassle-free Journey Awaits!
            </h3>
            <p className="mt-2 text-slate-300 text-sm sm:text-base font-light">
              Are you arriving at Kochi or Kozhikode airport and require a pickup? Or planning a multi-day family retreat in Munnar tea hills? We've got the ideal vehicle for you.
            </p>
          </div>

          <a
            href="tel:+919645782800"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md transition-all active:scale-95 text-sm uppercase tracking-wide whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consult Our Travel Expert</span>
          </a>
        </div>

      </div>
    </section>
  );
}
