"use client";

import { useState, useEffect } from "react";

type ViewportType = "mobile" | "tablet" | "desktop";

interface UseViewportReturn {
  viewportType: ViewportType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const useViewport = (): UseViewportReturn => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getViewportType = (): ViewportType => {
    if (width < BREAKPOINTS.mobile) return "mobile";
    if (width < BREAKPOINTS.tablet) return "tablet";
    return "desktop";
  };

  const viewportType = getViewportType();

  return {
    viewportType,
    isMobile: viewportType === "mobile",
    isTablet: viewportType === "tablet",
    isDesktop: viewportType === "desktop",
    width,
  };
};

// Convenience hook for simple mobile check
export const useIsMobile = (): boolean => {
  const { isMobile } = useViewport();
  return isMobile;
};

export default useViewport;
