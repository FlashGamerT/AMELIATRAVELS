import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Star } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Services", href: "#services" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Destinations", href: "#destinations" },
    { name: "Testimonials", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-blue-50"
          : "bg-slate-900/40 backdrop-blur-[2px] py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex flex-col select-none">
            <span className="flex items-center gap-1.5">
              <span className="font-sans font-extrabold tracking-tight text-xl sm:text-2xl text-blue-600 dark:text-blue-500 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">
                Amelia
              </span>
              <span className={`font-sans font-light tracking-wide text-xs sm:text-sm ${isScrolled ? "text-slate-600" : "text-amber-100"}`}>
                Tours & Travels
              </span>
            </span>
            <span className="flex items-center gap-1 text-[10px] text-amber-500 font-medium">
              <Star className="w-2.5 h-2.5 fill-current" />
              <span>5.0 ★ Google Top Taxi Service</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`font-medium text-sm hover:text-blue-600 transition-colors cursor-pointer ${
                  isScrolled ? "text-slate-700 hover:text-blue-600" : "text-slate-100 hover:text-amber-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Quick Contact & Call Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+919645782800"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 px-3 py-1.5 rounded-full ${
                isScrolled
                  ? "text-blue-600 hover:bg-blue-50 bg-blue-50/50"
                  : "text-white hover:text-amber-300 bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4 text-emerald-500 fill-current" />
              <span>+91 96457 82800</span>
            </a>
            <a
              href="#booking-enquiry"
              className="bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full hover:bg-amber-400 transition-all shadow-md active:scale-95 text-sm"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#booking-enquiry");
              }}
            >
              Book Taxi
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+919645782800"
              className={`p-2 rounded-full sm:hidden ${
                isScrolled ? "bg-blue-50 text-blue-600" : "bg-white/10 text-white"
              }`}
            >
              <Phone className="w-5 h-5 text-emerald-500 fill-current" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-medium text-base transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+919645782800"
                className="flex items-center justify-center gap-2 bg-blue-50/80 text-blue-700 hover:bg-blue-100 py-2.5 rounded-lg font-bold text-center"
              >
                <Phone className="w-4 h-4 text-emerald-600 fill-current" />
                <span>Call +91 96457 82800</span>
              </a>
              <a
                href="https://wa.me/919645782800?text=Hello%20Amelia%20Tours%20and%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20your%20taxi%20services."
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg font-bold text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp</span>
              </a>
              <button
                onClick={() => handleLinkClick("#booking-enquiry")}
                className="w-full text-center bg-amber-500 text-slate-900 font-bold py-2.5 rounded-lg hover:bg-amber-400"
              >
                Quick Enquiry Form
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
