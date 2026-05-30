import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Eye, Trash2, Calendar, ClipboardList, CheckSquare, Search, RefreshCw, X } from "lucide-react";
import { Enquiry } from "../types";

interface AdminPanelProps {
  refreshTrigger: number;
}

export default function AdminPanel({ refreshTrigger }: AdminPanelProps) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [localUpdateTrigger, setLocalUpdateTrigger] = useState(0);

  // Fetch enquiries on mount, trigger from parent, or local update
  useEffect(() => {
    if (isAdminOpen) {
      fetchEnquiries();
    }
  }, [isAdminOpen, refreshTrigger, localUpdateTrigger]);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (e) {
      console.error("Failed to load enquiries list:", e);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === "Pending" ? "Contacted" : "Pending";
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (res.ok) {
        setLocalUpdateTrigger((prev) => prev + 1);
      }
    } catch (e) {
      console.error("Failed to patch status:", e);
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this enquiry from the server databases?")) {
      return;
    }
    try {
      const res = await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        setLocalUpdateTrigger((prev) => prev + 1);
      }
    } catch (e) {
      console.error("Failed to delete enquiry from server database:", e);
    }
  };

  // Filter list
  const filteredEnquiries = enquiries.filter((item) => {
    return (
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.includes(searchTerm) ||
      item.pickupLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-12">
      {/* Access Panel Trigger Tab */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => setIsAdminOpen(!isAdminOpen)}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-full text-xs uppercase tracking-wider shadow-md inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95"
        >
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>{isAdminOpen ? "Hide Live Enquiry Supervisor" : "Open Live Enquiry Supervisor (Admin Dashboard)"}</span>
        </button>
      </div>

      <AnimatePresence>
        {isAdminOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-8 text-left"
          >
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
              
              {/* Header inside */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="font-sans font-black text-xl text-slate-900 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                    <span>Amelia Customer Database</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Below are the real submissions stored securely in the local database files (/data/enquiries.json) on this server.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={fetchEnquiries}
                    className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-all"
                    title="Refresh Data"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                  </button>
                  <button
                    onClick={() => setIsAdminOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-xl"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total leads count</p>
                  <p className="font-sans font-black text-2xl text-blue-800 mt-1">{enquiries.length}</p>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Pending quotation</p>
                  <p className="font-sans font-black text-2xl text-amber-800 mt-1">
                    {enquiries.filter((e) => e.status === "Pending").length}
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Active bookings</p>
                  <p className="font-sans font-black text-2xl text-emerald-800 mt-1">
                    {enquiries.filter((e) => e.status !== "Pending").length}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Latest submit hour</p>
                  <p className="font-sans font-bold text-xs text-slate-800 mt-2 truncate">
                    {enquiries[0] ? new Date(enquiries[0].timestamp).toLocaleDateString() : "No inquiries yet"}
                  </p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
                <input
                  type="text"
                  placeholder="Filter inquiries by name, phone, pickup, or destination..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white rounded-2xl text-sm text-slate-800"
                />
              </div>

              {/* List Container */}
              {loading ? (
                <div className="py-20 text-center">
                  <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <p className="text-slate-500 text-sm mt-3 font-medium">Fetching real-time entries from server...</p>
                </div>
              ) : filteredEnquiries.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left text-sm text-slate-600">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold text-xs uppercase tracking-wider">
                        <th className="py-3 px-4">Customer Details</th>
                        <th className="py-3 px-4">Cab Route Request</th>
                        <th className="py-3 px-4">Date & Seats</th>
                        <th className="py-3 px-4">Status Flag</th>
                        <th className="py-3 px-4 text-right">Database Tools</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredEnquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                          {/* Name / Contact details */}
                          <td className="py-4 px-4 font-sans text-xs">
                            <p className="font-bold text-slate-900 text-sm">{item.fullName}</p>
                            <p className="text-slate-500 mt-0.5 font-medium">{item.phoneNumber}</p>
                            {item.email && <p className="text-blue-500 mt-0.5 italic">{item.email}</p>}
                          </td>

                          {/* Route */}
                          <td className="py-4 px-4 text-xs">
                            <div className="flex flex-col">
                              <span className="font-semibold text-emerald-800">From: {item.pickupLocation}</span>
                              <span className="font-semibold text-blue-800 mt-0.5">To: {item.destination}</span>
                              <span className="text-[10px] bg-slate-100 border text-slate-600 px-1.5 py-0.5 rounded mt-1.5 self-start font-bold uppercase">
                                {item.serviceType}
                              </span>
                            </div>
                          </td>

                          {/* Date details */}
                          <td className="py-4 px-4 text-xs">
                            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>{item.travelDate}</span>
                            </div>
                            <p className="text-slate-500 mt-1 font-medium">{item.passengers} seats requested</p>
                          </td>

                          {/* Status */}
                          <td className="py-4 px-4">
                            <button
                              onClick={() => updateStatus(item.id, item.status)}
                              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border cursor-pointer ${
                                item.status === "Pending"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
                              }`}
                            >
                              ★ {item.status}
                            </button>
                          </td>

                          {/* Management tools */}
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {/* Open WhatsApp shortcut to immediately close query */}
                              <a
                                href={`https://wa.me/${item.phoneNumber.replace(/[^\d]/g, "")}`}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg"
                                title="Contact customer on WhatsApp"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-3.313l.358.212c1.472.871 3.179 1.33 4.935 1.331 5.233 0 9.493-4.259 9.495-9.493.001-2.536-1.012-4.921-2.852-6.762-1.839-1.84-4.225-2.853-6.76-2.854-5.233 0-9.493 4.26-9.496 9.493-.001 1.848.531 3.655 1.542 5.23l.232.361-1.01 3.687 3.778-.991z" />
                                </svg>
                              </a>

                              <button
                                onClick={() => deleteEnquiry(item.id)}
                                className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg cursor-pointer"
                                title="Delete inquiry permanently"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-16 text-center border border-dashed border-slate-200 rounded-3xl">
                  <ClipboardList className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500 font-semibold mb-1">No database enquiries found</p>
                  <p className="text-xs text-slate-400">Fill in and submit the booking request form above to see entries populate here instantly.</p>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
