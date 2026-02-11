import React from "react";
import Image from "next/image";
import { Member } from "@/types/member";

interface MemberCardProps {
  member: Member;
  isSelected: boolean;
  onSelect: (member: Member) => void;
  disabled?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
  isSelected,
  onSelect,
  disabled,
}) => {
  /* Fallback logic */
  const [imgSrc, setImgSrc] = React.useState(member.image);

  console.log("Rendering MemberCard for:", member.name, "Selected:", isSelected, "Disabled:", disabled , "Image Source:", imgSrc);

  return (
    <div
      onClick={() => !disabled && onSelect(member)}
      className={`
        relative overflow-hidden rounded-xl h-75 aspect-[3/4] cursor-pointer transition-all duration-300
        group
        ${disabled ? "opacity-50 grayscale cursor-not-allowed" : "hover:scale-[1.02]"}
        ${isSelected ? "ring-4 ring-red-500 ring-offset-2 ring-offset-black scale-[1.02] shadow-[0_0_30px_rgba(239,68,68,0.4)]" : "border border-white/10"}
      `}
    >
      <Image
        src={imgSrc}
        alt={member.name}
        fill
        className={`
          object-cover transition-transform duration-500
          ${!disabled && "group-hover:scale-110"}
        `}
        sizes="(max-width: 768px) 50vw, 25vw"
        loading="lazy"
        onError={() => setImgSrc("/fallback-member.svg")} // Fallback logic
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Name Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <h3 className={`
          font-bold text-white tracking-wide
          ${isSelected ? "text-lg text-red-400" : "text-sm"}
        `}>
          {member.name}
        </h3>
      </div>
      
      {/* Selection Checkmark Indicator (Optional visual reinforcement) */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-lg animate-in zoom-in spin-in-12 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};
