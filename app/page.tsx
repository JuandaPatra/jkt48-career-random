"use client";

import React, { useState } from "react";
import { MemberGrid } from "@/components/MemberGrid/MemberGrid";
import { ScanningOverlay } from "@/components/ScanningOverlay/ScanningOverlay";
import { ResultModal } from "@/components/ResultModal/ResultModal";
import { Button } from "@/components/ui/Button";
import { members } from "@/lib/members";
import { useRandomJob } from "@/hooks/useRandomJob";
import { Member } from "@/types/member";

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const { isScanning, result, startScan, resetScan } = useRandomJob();

  const handleSelectMember = (member: Member) => {
    setSelectedMember(member);
  };

  const handleStart = () => {
    if (selectedMember) {
      startScan(selectedMember.name);
    }
  };

  const handleTryAgain = () => {
    if (selectedMember) {
      startScan(selectedMember.name);
    }
  };

  const handleChangeMember = () => {
    resetScan();
    setSelectedMember(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4 relative max-w-7xl mx-auto">
      
      {/* Header */}
      <header className="text-center mb-8 space-y-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-500 drop-shadow-sm font-[family-name:var(--font-outfit)]">
          JKT48 CAREER DESTINY
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
          Pilih member favoritmu dan lihat takdir profesi apa yang cocok untuknya!
        </p>
      </header>

      {/* Grid */}
      <MemberGrid
        members={members}
        selectedMemberId={selectedMember?.id || null}
        onSelect={handleSelectMember}
        disabled={isScanning || !!result}
      />

      {/* Floating Action Bar (Sticky on Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent flex justify-center z-40 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-md">
          <Button
            onClick={handleStart}
            disabled={!selectedMember || isScanning || !!result}
            fullWidth
            className="shadow-2xl shadow-red-900/20 text-lg py-4"
          >
            {selectedMember ? `Tentukan Nasib ${selectedMember.name} 🔮` : "Pilih Member Dulu 👆"}
          </Button>
        </div>
      </div>

      {/* Overlays */}
      {isScanning && selectedMember && (
        <ScanningOverlay member={selectedMember} />
      )}

      {result && (
        <ResultModal
          result={result}
          onTryAgain={handleTryAgain}
          onChangeMember={handleChangeMember}
        />
      )}
      
      {/* Footer Credit */}
      <footer className="mt-8 mb-24 md:mb-8 text-center text-xs text-gray-600">
        <p>Made for JKT48 Fans • Not affiliated with JKT48 Operation Team</p>
      </footer>
    </main>
  );
}
