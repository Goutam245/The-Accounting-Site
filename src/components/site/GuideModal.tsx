import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import GhlForm from "./GhlForm";

const FORM_SRC = "https://api.bookingmantra.club/widget/form/nCTDpOijJb8aBe68Nfu9";

interface GuideModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
}

export default function GuideModal({ open, title, onClose }: GuideModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Download guide"}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-7"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-peach transition-colors"
        >
          <X size={18} />
        </button>
        <h3 className="font-serif text-xl text-foreground mb-1 pr-10">{title || "Get your free guide"}</h3>
        <p className="text-body text-[14px] mb-4">Enter your details and we'll email it straight over.</p>
        {submitted ? (
          <div className="py-16 text-center">
            <div className="w-14 h-14 rounded-full bg-accent text-white text-2xl flex items-center justify-center mx-auto mb-5">✓</div>
            <p className="font-serif text-xl text-foreground">Thanks. Check your inbox for the guide.</p>
          </div>
        ) : (
          <GhlForm
            src={FORM_SRC}
            title="Guide Download - TAS"
            height={450}
            onSubmitSuccess={() => setSubmitted(true)}
          />
        )}
      </motion.div>
    </motion.div>,
    document.body,
  );
}
