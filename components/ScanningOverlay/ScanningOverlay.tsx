import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Member } from "@/types/member";

interface ScanningOverlayProps {
  member: Member;
}

// Simple internal SVG icon component for visual hints
const VisualHintIcon = ({ hintKey }: { hintKey: string }) => {
  // Map hint keys to simple SVG paths
  const getPath = (key: string) => {
    switch (key) {
      case "camera": return "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"; // Camera
      case "mic": return "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8"; // Mic
      case "computer": return "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25 M8 16h8"; // Cloud/Comp
      case "music": return "M9 18V5l12-2v13 M9 9l12-2"; // Music Note
      case "game": return "M6 12h4m-2-2v4M18 12h.01M16.5 10.5h.01M19.5 10.5h.01M21 12c0 5-4.5 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"; // Game controller
      case "star": return "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"; // Star
      default: return "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4 M12 8h.01"; // Generic circle/info
    }
  };

  // Extract base key (e.g., "camera" from "dslr_camera") for simpler mapping
  const baseKey = hintKey.includes("camera") ? "camera" 
    : hintKey.includes("mic") || hintKey.includes("voice") ? "mic"
    : hintKey.includes("game") || hintKey.includes("esports") ? "game"
    : hintKey.includes("music") || hintKey.includes("sound") ? "music"
    : hintKey.includes("star") || hintKey.includes("idol") ? "star"
    : "default"; // Fallback

  return (
    <svg 
      viewBox="0 0 24 24" 
      width="48" 
      height="48" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    >
      <path d={getPath(baseKey)} />
    </svg>
  );
};

export const ScanningOverlay: React.FC<ScanningOverlayProps> = ({ member }) => {
  const [scanText, setScanText] = useState("Menganalisis kepribadian...");
  const [hintIcon, setHintIcon] = useState("camera");

  const texts = [
    "Menganalisis kepribadian...",
    "Membaca aura panggung...",
    "Menghitung takdir kans...",
    "Mencocokkan frekuensi...",
  ];

  const hints = ["camera", "mic", "game", "music", "star", "computer"];

  useEffect(() => {
    // Text cycling
    const textInterval = setInterval(() => {
      setScanText((prev) => texts[(texts.indexOf(prev) + 1) % texts.length]);
    }, 800);

    // Icon cycling
    const hintInterval = setInterval(() => {
      setHintIcon((prev) => hints[(hints.indexOf(prev) + 1) % hints.length]);
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(hintInterval);
    };
  }, []);

  const [imgSrc, setImgSrc] = useState(member.image);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-500">
      
      {/* Central Visual */}
      <div className="relative w-64 h-80 mb-8 items-center flex justify-center">
        {/* Animated Container */}
        <div className="relative w-full h-full animate-pulse">
           {/* Member Silhouette */}
          <Image
            src={imgSrc}
            alt="Scanning"
            fill
            className="object-cover rounded-xl filter grayscale contrast-125 brightness-75 opacity-80"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgSrc("/fallback-member.svg")}
          />
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/30 to-transparent h-1/4 w-full animate-scanning-line" />
        </div>

        {/* Floating Icons */}
        <div className="absolute -top-12 animate-bounce duration-300">
             <VisualHintIcon hintKey={hintIcon} />
        </div>
      </div>

      {/* Text Output */}
      <div className="text-center space-y-2 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase animate-pulse">
          SCANNING
        </h2>
        <p className="text-red-400 font-mono text-lg md:text-xl h-8">
          {scanText}
        </p>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
    </div>
  );
};
