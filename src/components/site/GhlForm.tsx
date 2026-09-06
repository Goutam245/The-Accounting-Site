import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface GhlFormProps {
  src: string;
  title: string;
  height?: number;
  className?: string;
  onSubmitSuccess?: () => void;
}

export default function GhlForm({ src, title, height = 850, className = "", onSubmitSuccess }: GhlFormProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!onSubmitSuccess) return;
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("bookingmantra.club")) return;
      const payload = typeof event.data === "string" ? event.data : JSON.stringify(event.data);
      if (/submit|success|thank/i.test(payload)) onSubmitSuccess();
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSubmitSuccess]);

  return (
    <div className={`relative w-full ${className}`} style={{ minHeight: height }}>
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-peach border border-border"
          aria-hidden="true"
        >
          <Loader2 className="animate-spin text-accent" size={28} />
          <p className="text-sm text-muted-foreground">Loading form…</p>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height,
          border: "none",
          borderRadius: 8,
          opacity: loaded ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      />
    </div>
  );
}
