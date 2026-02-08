"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreenMain from "@/components/pages/splash-screen/main";
import { checkUserAuth } from "@/services/check-auth/check-user-auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAuthenticated = checkUserAuth();
      if (isAuthenticated) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }, 5000); // 1 minute delay

    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreenMain />;
}
