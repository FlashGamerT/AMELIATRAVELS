import { motion } from "motion/react";
import { Star, MessageSquare, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-blue-50/10 via-white to-white relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Google Rating Banner Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 transform origin-top-right pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Uncompromising Excellence
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-3 text-white">
                What Our Customers Say
              </h2>
              <p className="mt-2 text-slate-300 font-light max-w-lg">
                Read authentic Google reviews from global tourists and local families who traversed Kerala comfortably with Amelia Tours and Travels.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center shrink-0">
              <span className="font-mono font-black text-5xl sm:text-6xl text-amber-400">5.0</span>
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-100 font-bold uppercase tracking-wider">
                ★★★★★ 22 Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Masonry or Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/50 hover:border-blue-200 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between relative group"
            >
              {/* Quote mark ornament */}
              <div className="absolute right-6 top-6 text-slate-200/50 group-hover:text-blue-100 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 transform rotate-180 fill-current" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>

                {/* Comment content */}
                <p className="text-slate-700 text-sm sm:text-base font-light italic leading-relaxed mb-6 block relative z-10">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 relative z-10">
                <div className="flex items-center gap-3">
                  {/* First Letter Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center font-bold text-slate-700 uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-950 text-sm">
                      {review.name}
                    </h4>
                    {review.date && (
                      <span className="text-[10px] text-slate-400">
                        Verified Travel — {review.date}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-rose-500 gap-1 text-[10px] uppercase font-bold">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Recommend</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Driver Credit Banner */}
        <div className="mt-16 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-700 rounded-2xl">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-sans font-extrabold text-slate-900 text-base">
                Driver Excellence Highlight: Mr. Shiju (Sijju)
              </h4>
              <p className="text-xs text-slate-600 font-light mt-1">
                Our lead captain, Mr. Shiju, is widely praised across reviews for his patient guidance, expert driving skill, knowledge of offbeat vistas, and wonderful local food stops!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full whitespace-nowrap">
            Elite Captain Crew
          </span>
        </div>

      </div>
    </section>
  );
}
