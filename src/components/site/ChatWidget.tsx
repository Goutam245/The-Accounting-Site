import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MessageCircle, MessageSquare, Phone, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[76px] right-0 w-[320px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            <div className="bg-[#E07B39] text-white p-5 relative">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="absolute top-3 right-3 text-white/90 hover:text-white"
              >
                <X size={18} />
              </button>
              <p className="font-serif text-xl mb-1">👋 Hi there!</p>
              <p className="text-white/90 text-[13px]">We typically reply in under 4 hours</p>
            </div>
            <div className="p-4 space-y-2">
              <a
                href="https://app.usemotion.com/meet/ankit/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-accent hover:bg-peach transition-colors"
              >
                <Calendar size={18} className="text-accent shrink-0" />
                <span className="text-[14px] font-medium text-foreground">Book a Free Consultation</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-accent hover:bg-peach transition-colors"
              >
                <MessageSquare size={18} className="text-accent shrink-0" />
                <span className="text-[14px] font-medium text-foreground">Send us a message</span>
              </Link>
              <a
                href="tel:+16476992997"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-accent hover:bg-peach transition-colors"
              >
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-[14px] font-medium text-foreground">Call us now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="group relative w-[60px] h-[60px] rounded-full bg-[#E07B39] text-white flex items-center justify-center transition-transform hover:scale-110"
        style={{ boxShadow: "0 8px 32px rgba(224,123,57,0.4)" }}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        {!open && (
          <span className="absolute right-[72px] top-1/2 -translate-y-1/2 bg-foreground text-white text-[12px] font-medium px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        )}
      </button>
    </div>
  );
}
