import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MessageCircle, AlertCircle, Phone, Calendar, MapPin, Users, HelpCircle, FileText, ChevronRight } from "lucide-react";

interface EnquiryFormProps {
  onSuccessSubmit?: () => void;
}

export default function EnquiryForm({ onSuccessSubmit }: EnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [serviceType, setServiceType] = useState("Local Taxi");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successData, setSuccessData] = useState<any | null>(null);

  // Auto set tomorrow's date as default
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setTravelDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");
    setSuccessData(null);

    // Basic Validation
    if (!fullName.trim()) {
      setErrorText("Please state your Full Name.");
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorText("Please provide your Phone/WhatsApp number.");
      return;
    }
    if (!pickupLocation.trim()) {
      setErrorText("Please specify where we should pick you up.");
      return;
    }
    if (!destination.trim()) {
      setErrorText("Please specify where you would like to go.");
      return;
    }
    if (!travelDate) {
      setErrorText("Please pick a valid Travel Date.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          email,
          pickupLocation,
          destination,
          travelDate,
          passengers,
          serviceType,
          message,
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Something went wrong. Please try again.");
      }

      setSuccessData(resData.data);
      
      // Cleanup inputs
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setPickupLocation("");
      setDestination("");
      setMessage("");

      // Notify parent to refresh admin panel list
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }
    } catch (err: any) {
      setErrorText(err.message || "Failed to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  // Pre-formatted instant WhatsApp speedup helper
  const handleWhatsAppExpedite = () => {
    if (!successData) return;
    const baseText = `Hello Amelia Tours and Travels, I have submitted an web enquiry!\n\n📋 *Enquiry Details:*\n• *Name*: ${successData.fullName}\n• *Phone*: ${successData.phoneNumber}\n• *Service*: ${successData.serviceType}\n• *Route*: ${successData.pickupLocation} ➔ ${successData.destination}\n• *Date*: ${successData.travelDate}\n• *Guests*: ${successData.passengers}\n• *Notes*: ${successData.message || "None"}\n\nPlease expedite my free taxi quotation!`;
    const encoded = encodeURIComponent(baseText);
    window.open(`https://wa.me/919645782800?text=${encoded}`, "_blank");
  };

  return (
    <section id="booking-enquiry" className="py-24 bg-gradient-to-b from-blue-50/20 via-white to-slate-50/50 relative overflow-hidden">
      {/* Visual glowing bubbles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Informational Left hand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                <FileText className="w-3.5 h-3.5" />
                <span>Zero-Obligation Quotation</span>
              </span>

              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Get Your Free Taxi Quote Instantly
              </h2>

              <p className="mt-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Submit your trip details below. Our reservation captain will analyze your route, assign the best vehicle, and call/WhatsApp you with the guaranteed cheapest budget ticket option.
              </p>

              {/* Informational specs checklist */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 fill-current text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">No Credit Card Required</h4>
                    <p className="text-xs text-slate-500 leading-normal">Pay directly to our certified native driver after your tour concludes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 fill-current text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Instant WhatsApp Expedition</h4>
                    <p className="text-xs text-slate-500 leading-normal">After submitting, you can instantly ping details via WhatsApp for a 5-minute reply rate.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-xl shrink-0 border border-amber-100">
                    <CheckCircle2 className="w-5 h-5 fill-current text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Free Cancellation Policy</h4>
                    <p className="text-xs text-slate-500 leading-normal">Plans changed last minute? Notify us comfortably over WhatsApp with zero cancellation charges.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats board */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">24/7 Helpline desk</span>
                <p className="font-sans font-black text-lg text-slate-800">+91 96457 82800</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Typical Quote Time</span>
                <p className="font-sans font-black text-lg text-emerald-600">Under 5 Minutes</p>
              </div>
            </div>
          </div>

          {/* Form / Success Card Right hand Column */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white/70 backdrop-blur-xl rounded-3xl border border-white p-6 sm:p-10 shadow-2xl shadow-blue-900/5 relative">
              <AnimatePresence mode="wait">
                
                {!successData ? (
                  /* THE MAIN FORM */
                  <motion.form
                    key="enquiry-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 text-left"
                  >
                    <div>
                      <h3 className="font-sans font-extrabold text-slate-800 text-xl">Book Your Kerala Ride</h3>
                      <p className="text-xs text-slate-500 mt-1">Get an instant free quote for airport drops, tours, or outstation cabs.</p>
                    </div>

                    {/* Error Box */}
                    {errorText && (
                      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex items-start gap-2.5 text-xs text-rose-800">
                        <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Required Detail Missing:</span> {errorText}
                        </div>
                      </div>
                    )}

                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Phone className="w-3 h-3 text-emerald-500" />
                          <span>Phone / WhatsApp *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 96457 82800"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                        />
                      </div>
                    </div>

                    {/* Optional Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                      />
                    </div>

                    {/* Row 2: Pickup & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-500" />
                          <span>Pickup Location *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Airport, Railway, or Hotel name"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-indigo-500" />
                          <span>Your Destination *</span>
                        </label>
                        <input
                          type="text"
                          id="enquiry-destination"
                          required
                          placeholder="Where are you travelling to?"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Travel Date & Passengers Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-pink-500" />
                          <span>Date of Travel *</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Users className="w-3 h-3 text-slate-400" />
                          <span>Seat Count Required</span>
                        </label>
                        <select
                          value={passengers}
                          onChange={(e) => setPassengers(e.target.value)}
                          className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-[11px] text-slate-800 text-sm"
                        >
                          <option value="1">1 Passenger</option>
                          <option value="2">2 Passengers</option>
                          <option value="3">3 Passengers</option>
                          <option value="4">4 - Hatchback / Sedan</option>
                          <option value="5">5 Passengers</option>
                          <option value="6">6 - SUV (Ertiga)</option>
                          <option value="7">7 - Crysta / Innova</option>
                          <option value="12">12 Seater - Tempo Traveller</option>
                          <option value="17">17 Seater - Tempo Traveller</option>
                          <option value="20">20+ Group Travel</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Category Selector */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <HelpCircle className="w-3 h-3 text-purple-500" />
                        <span>Core Service Category *</span>
                      </label>
                      <select
                        id="enquiry-service-type"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-[11px] text-slate-800 text-sm"
                      >
                        <option value="Local Taxi">Local Taxi Ride (Hour hire)</option>
                        <option value="Airport Pickup & Drop">Airport Pickup or Drop transfers</option>
                        <option value="Outstation Taxi">Outstation Tour Cab (Round-trip)</option>
                        <option value="Kerala Tour Packages">Kerala Tourism Holiday Packages (Multi-day)</option>
                        <option value="One Way Taxi">One Way Drop Taxi</option>
                        <option value="Railway Station Transfers">Railway Transfers</option>
                        <option value="Family Vacation Travel">Family vacation</option>
                      </select>
                    </div>

                    {/* Optional message textbox */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Specific Cabin Details or Flight/Train Numbers (Optional)
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={2}
                        placeholder="Tell us about baggage loads, senior citizens, specific resort stays, etc..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl px-4 py-2.5 text-slate-800 text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-black rounded-2xl mt-2 shadow-lg shadow-blue-600/10 active:scale-95 transition-all text-sm uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing Reservation...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Get Free Quote</span>
                          <Send className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* THE SUCCESS CARD */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col gap-6 text-center py-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-12 h-12 fill-current text-white" />
                    </div>

                    <div className="max-w-md mx-auto">
                      <h3 className="font-sans font-black text-2xl text-slate-800 tracking-tight">
                        Enquiry Recorded Successfully!
                      </h3>
                      <p className="text-sm text-slate-500 mt-2">
                        Thank you, <span className="font-semibold text-slate-800">{successData.fullName}</span>! We have emailed your details to our central reservation queue.
                      </p>
                    </div>

                    {/* Booking Details Summary box */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left text-xs text-slate-600 max-w-sm mx-auto space-y-2">
                      <p className="font-bold text-slate-800 text-[10px] uppercase tracking-wider border-b border-slate-200 pb-1.5">
                        Your Booking Reference ID: {successData.id.slice(4, 12)}
                      </p>
                      <p>• <span className="font-semibold text-slate-700">Trip:</span> {successData.pickupLocation} ➔ {successData.destination}</p>
                      <p>• <span className="font-semibold text-slate-700">Date:</span> {successData.travelDate}</p>
                      <p>• <span className="font-semibold text-slate-700">Service:</span> {successData.serviceType}</p>
                      <p>• <span className="font-semibold text-slate-700">Guests:</span> {successData.passengers} seats requested</p>
                    </div>

                    {/* Action recommendations buttons */}
                    <div className="flex flex-col gap-3 max-w-xs mx-auto w-full mt-2">
                      <button
                        onClick={handleWhatsAppExpedite}
                        className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-400/20 active:scale-95 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
                        <span>Expedite via WhatsApp</span>
                      </button>

                      <button
                        onClick={() => setSuccessData(null)}
                        className="w-full py-3 bg-white hover:bg-slate-50 text-slate-600 font-bold border border-slate-200 rounded-2xl text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>

                    <div className="text-[10px] text-slate-400">
                      Our captain will contact you via WhatsApp / Phone shortly.
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
