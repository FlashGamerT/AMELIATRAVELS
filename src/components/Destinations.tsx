import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Compass, ArrowRightCircle, Sparkles, Filter } from "lucide-react";
import { DESTINATIONS } from "../data";

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Munnar", "Wayanad", "Vagamon", "Thekkady", "Alleppey", "Kochi", "Kozhikode", "Athirappilly", "Kovalam", "Kumarakom"];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === "All" || dest.name.toLowerCase() === selectedTag.toLowerCase();

    return matchesSearch && matchesTag;
  });

  const handleEnquiry = (destinationName: string) => {
    // 1. Populate destination field
    const destInput = document.querySelector("#enquiry-destination") as HTMLInputElement;
    if (destInput) {
      destInput.value = destinationName;
    }
    // Choose tour package
    const selectEl = document.querySelector("#enquiry-service-type") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = "Kerala Tour Packages";
      // Dispatch change
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
    // Prefill message
    const msgEl = document.querySelector("#enquiry-message") as HTMLTextAreaElement;
    if (msgEl) {
      msgEl.value = `I am planning a trip to ${destinationName} and would like to hire a reliable taxi from Amelia Tours and Travels. Please plan an itinerary.`;
    }
    // 2. Scroll to form
    const formEl = document.querySelector("#booking-enquiry");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      {/* Visual background layers */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Kerala's Wonders</span>
          </motion.div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Popular Tourist Destinations We Cover
          </h2>

          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Plan your absolute dream vacation with our elite, well-guided travel partners. Clean and transparent pricing from coast to valleys.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-white shadow-sm max-w-5xl mx-auto">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search destinations (e.g., Munnar, beach, spice)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white rounded-2xl text-sm"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden md:block" />
            <div className="flex gap-2">
              {tags.slice(0, 5).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                    selectedTag === t
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white/60 backdrop-blur-md rounded-3xl border border-white hover:border-slate-300 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Name and Tagline */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold tracking-widest uppercase px-2 py-0.5 rounded">
                      {dest.tagline}
                    </span>
                    <h3 className="font-sans font-black text-2xl text-white mt-1 leading-none tracking-tight">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Distance indicator */}
                    <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold mb-3">
                      <MapPin className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>{dest.distanceFromAirport}</span>
                    </div>

                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    {/* Highlights chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {dest.attractions.map((attr) => (
                        <span
                          key={attr}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-[10px] font-semibold"
                        >
                          {attr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Book Taxi */}
                  <button
                    onClick={() => handleEnquiry(dest.name)}
                    className="w-full flex items-center justify-between bg-slate-900 hover:bg-blue-600 group-hover:bg-blue-600 text-white group-hover:text-slate-950 font-black px-4 py-3 rounded-2xl transition-all text-xs uppercase tracking-wider cursor-pointer active:scale-95 border border-transparent"
                  >
                    <span>Request Taxi Estimate</span>
                    <ArrowRightCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDestinations.length === 0 && (
            <div className="col-span-full text-center py-16">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-spin duration-1000" />
              <p className="text-slate-500 font-semibold text-lg">No matching destinations found.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="mt-2 text-sm text-blue-600 underline font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
