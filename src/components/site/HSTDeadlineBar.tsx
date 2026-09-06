import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function getNextDeadline() {
  const months = [3, 6, 9, 0]; // Apr 30, Jul 31, Oct 31, Jan 31 (month index of last day)
  const now = new Date();
  const candidates = [
    new Date(now.getFullYear(), 3, 30),
    new Date(now.getFullYear(), 6, 31),
    new Date(now.getFullYear(), 9, 31),
    new Date(now.getFullYear() + 1, 0, 31),
    new Date(now.getFullYear(), 0, 31),
  ];
  const next = candidates.find((d) => d.getTime() >= now.setHours(0, 0, 0, 0))!;
  const days = Math.ceil((next.getTime() - new Date().setHours(0, 0, 0, 0)) / 86400000);
  return { date: next, days };
}

export default function HSTDeadlineBar({ onDismiss }: { onDismiss: () => void }) {
  const { date, days } = useMemo(getNextDeadline, []);
  const urgent = days <= 14;
  const critical = days <= 7;
  const dateStr = date.toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div
      className={`fixed left-0 right-0 z-[80] text-white ${critical ? "animate-pulse" : ""}`}
      style={{ top: 3, height: 44, background: urgent ? "#DC2626" : "#E07B39" }}
    >
      <div className="container-x h-full flex items-center justify-between gap-3">
        <p className="text-[12px] sm:text-[14px] font-semibold truncate">
          ⚡ Next HST Filing Deadline: <span className="font-bold">{days} days</span> away — {dateStr}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-md bg-white text-[#1B2A4A] text-[13px] font-semibold hover:bg-white/90 transition"
          >
            File With Us →
          </Link>
          <button onClick={onDismiss} aria-label="Dismiss" className="text-white/90 hover:text-white p-1">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
