import React from "react";
import { Member } from "@/types/member";
import { MemberCard } from "./MemberCard";

interface MemberGridProps {
  members: Member[];
  selectedMemberId: string | null;
  onSelect: (member: Member) => void;
  disabled?: boolean;
}

export const MemberGrid: React.FC<MemberGridProps> = ({
  members,
  selectedMemberId,
  onSelect,
  disabled,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24 md:pb-8">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          isSelected={member.id === selectedMemberId}
          onSelect={onSelect}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
