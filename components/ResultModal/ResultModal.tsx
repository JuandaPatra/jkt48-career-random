import React, { useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Result } from "@/types/result";
import { Button } from "@/components/ui/Button";

interface ResultModalProps {
  result: Result;
  onTryAgain: () => void;
  onChangeMember: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  result,
  onTryAgain,
  onChangeMember,
}) => {
  const [imgSrc, setImgSrc] = React.useState(result.job.image);

  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        },
        colors: ['#ef4444', '#ffffff', '#f472b6'] // Red, White, Pink
      });
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        },
        colors: ['#ef4444', '#ffffff', '#f472b6']
      });
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  // Format text template
  const finalText = result.job.textTemplate.replace(/{member}/g, result.memberName);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in zoom-in-95 duration-300">
      
      <div className="w-full max-w-lg bg-gray-900 border border-t-red-500/50 border-b-red-500/10 border-x-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Header - Ribbon-like */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 p-4 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
          <h2 className="text-2xl font-black text-white italic tracking-wider drop-shadow-md">
            🎉 SELAMAT!
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-6 text-center">
            
            {/* Subtitle */}
            <p className="text-gray-300 font-medium">
              <span className="font-bold text-white">{result.memberName} </span> ternyata cocok jadi:
            </p>

            {/* Job Title */}
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 drop-shadow-sm py-2">
              {result.job.label}
            </h1>

            {/* Job Image Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-white/10 shadow-inner group">
                <Image 
                    src={imgSrc}
                    alt={result.job.label}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImgSrc("/fallback-job.svg")}
                />
                
                {/* Overlay Text Description */}
                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12">
                     <p className="text-white text-sm md:text-base leading-relaxed font-light italic">
                        &quot;{finalText}&quot;
                     </p>
                 </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
               <Button 
                onClick={onTryAgain} 
                variant="primary" 
                fullWidth
                className="flex items-center justify-center gap-2"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                 </svg>
                 Coba Lagi
               </Button>
               
               <Button 
                onClick={onChangeMember} 
                variant="secondary" 
                fullWidth
                className="flex items-center justify-center gap-2"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                 Ganti Member
               </Button>
            </div>

        </div>
      </div>
    </div>
  );
};
