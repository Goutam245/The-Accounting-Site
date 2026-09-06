const stats = [
  ["300+", "Ontario Businesses Served"],
  ["$0", "HST Penalties in 2024"],
  ["48-Hour", "Average Turnaround"],
  ["100%", "On-Time Filing Rate"],
  ["15+", "Industries Served"],
  ["3", "Ontario Office Locations"],
];

export default function StatsTicker() {
  const items = [...stats, ...stats];
  return (
    <section className="bg-[#1B2A4A] py-5 overflow-hidden border-y border-white/10">
      <div className="group relative">
        <div
          className="flex gap-10 whitespace-nowrap animate-[ticker_40s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {items.map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-[14px] font-semibold">
              <span className="text-[#E07B39]">✓ {s[0]}</span>
              <span className="text-white">{s[1]}</span>
              <span className="text-white/30 ml-6">·</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
