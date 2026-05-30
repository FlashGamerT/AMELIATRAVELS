import { motion } from "motion/react";
import { Users, Briefcase, Sparkles, Check, ChevronRight, Fuel } from "lucide-react";
import { VEHICLES } from "../data";

export default function Fleet() {
  const handleSelectVehicle = (vehicleName: string) => {
    // Scroll and update select box or description
    const selectEl = document.querySelector("#enquiry-service-type") as HTMLSelectElement;
    if (selectEl) {
      // Find the option or append/focus
      selectEl.value = "Local Taxi"; // default fallback or let's update a custom route message
    }
    const msgEl = document.querySelector("#enquiry-message") as HTMLTextAreaElement;
    if (msgEl) {
      msgEl.value = `I'm interested in booking the ${vehicleName}. Please provide an estimate.`;
    }
    const formEl = document.querySelector("#booking-enquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-white via-emerald-50/10 to-blue-50/10 relative overflow-hidden">
      {/* Dynamic ambient layout blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chauffeur-Driven Premium Fleet</span>
          </motion.div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Our Elite Chauffeur-Driven Vehicles
          </h2>

          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Choose from our pristine, fully insured, and well-maintained fleet. Equipped with dual air conditioning, professional-grade cleanliness, and expert native captains.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/70 backdrop-blur-md rounded-3xl border border-white hover:border-emerald-300 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                  {vehicle.category}
                </span>

                {/* Estimate price badge */}
                {vehicle.baseRateEstimate && (
                  <span className="absolute bottom-4 right-4 bg-emerald-600 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Fuel className="w-3.5 h-3.5" />
                    <span>Est. {vehicle.baseRateEstimate}</span>
                  </span>
                )}
              </div>

              {/* Vehicle Specs & Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-extrabold text-slate-900 text-xl mb-4 group-hover:text-emerald-700 transition-colors">
                    {vehicle.name}
                  </h3>

                  {/* Core Capacity Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-slate-100 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold">{vehicle.capacity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold">{vehicle.luggage}</span>
                    </div>
                  </div>

                  {/* Comfort Features Bullet List */}
                  <ul className="space-y-2 mb-8">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Call to Action */}
                <button
                  onClick={() => handleSelectVehicle(vehicle.name)}
                  className="w-full py-3.5 bg-slate-900 hover:bg-emerald-600 group-hover:bg-emerald-600 text-white group-hover:text-slate-950 font-black rounded-2xl transition-all duration-300 flex items-center justify-center gap-1 text-sm uppercase tracking-wider shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Select & Book Vehicle</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Multi-day package Note */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-white">
          <p className="text-xs text-slate-500 font-medium">
            * Estimate rates are pure approximations for local/outstation mileage. Interstate road permit costs, toll gates, and driver food/stay beta surcharges are fully integrated into our customized packages without hidden surprises.
          </p>
        </div>

      </div>
    </section>
  );
}
