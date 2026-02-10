"use client";

import { useState, useCallback } from "react";
import { Job } from "@/types/job";
import { Result } from "@/types/result";
import { jobs } from "@/lib/jobs";

export const useRandomJob = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const startScan = useCallback((memberName: string) => {
    setIsScanning(true);
    setResult(null);

    // Scanning duration: ~2.5 seconds
    setTimeout(() => {
      const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
      setResult({
        memberName,
        job: randomJob,
      });
      setIsScanning(false);
    }, 2500);
  }, []);

  const resetScan = useCallback(() => {
    setIsScanning(false);
    setResult(null);
  }, []);

  return {
    isScanning,
    result,
    startScan,
    resetScan,
  };
};
