import { Phone, MessageCircle, Navigation, MapPin, Star, Shield, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const addressText = "Amelia Tours and Travels\nVettukad - Cherumuttam Rd, Behind Ash'ariyya Islamic Nursery, Thonikkallupara, Kerala 673638, India";
  
  const handleDirections = () => {
    const encoded = encodeURIComponent(addressText);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-blue-50/10 to-white relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Find Us Anywhere</span>
          </span>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Our Central Location & Contact Hub
          </h2>

          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            We are headquartered in Kozhikode district, serving every airport, city, and tourist hill station across entire Kerala, round-the-clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column - Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/70 backdrop-blur-xl border border-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-blue-900/5 text-left relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-600/5 rounded-tl-full pointer-events-none" />
            
            <div className="space-y-8">
              {/* Brand metadata inside */}
              <div>
                <h3 className="font-sans font-black text-2xl text-slate-900">
                  Amelia Tours & Travels
                </h3>
                <div className="flex items-center gap-1.5 mt-2 text-amber-500 text-xs font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>5.0 Star Rated Cab Company</span>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-50 text-blue-600 border border-blue-100 rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">Main Office Address</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-normal whitespace-pre-line">
                    Vettukad - Cherumuttam Rd, Behind Ash'ariyya Islamic Nursery, Thonikkallupara, Kerala 673638, India
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Hotlines */}
              <div className="flex items-start gap-3">
                <div className="p-3 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-800 text-sm">24/7 Telephone Booking Desk</h4>
                  <p className="text-slate-950 text-base font-black mt-1">
                    +91 96457 82800
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">English, Malayalam, and Hindi spoken support desk.</p>
                </div>
              </div>

              {/* Safe and Professional Drivers note */}
              <div className="flex items-center gap-2 bg-slate-50 border rounded-2xl p-4 text-xs text-slate-500">
                <Shield className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                <span>Our airport pickups can be tracked in real-time on your phone for added safety.</span>
              </div>
            </div>

            {/* Emergency trigger buttons */}
            <div className="flex flex-col gap-3 mt-10">
              <a
                href="tel:+919645782800"
                className="w-full py-3.5 bg-slate-950 text-white font-black rounded-2xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Call +91 96457 82800</span>
              </a>

              <a
                href="https://wa.me/919645782800?text=Hello%20Amelia%20Tours%20and%20Travels%2C%20I%20would%20like%20to%20reserve%20a%20taxi%20immediately."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-500 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Instant booking</span>
              </a>

              <button
                onClick={handleDirections}
                className="w-full py-3 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 font-bold rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-amber-500 fill-current" />
                <span>Get Driving Directions</span>
              </button>
            </div>
          </div>

          {/* Right Column - Embedded Google Maps IFrame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/50 shadow-2xl relative min-h-[350px]">
            {/* Real Interactive Google Maps embed focused closely on Amelia Tours address */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.397087648349!2d75.9189917757917!3d11.37130004781442!2m3!1f0!2f0!3f0!3m2!1i1024|2i768|4f13.1!3m3!1m2!1s0x3ba65da98e21aebf%3A0x6bd6c4f0b2fcfdb8!2sAmelia%20tours%20and%20travels!5e0!3m2!1sen!2sin!4v1717010000000!5m2!1sen!2sin"
              title="Amelia Tours and Travels Google Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
