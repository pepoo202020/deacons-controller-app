"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-transparent hover:bg-black/5 transition-colors border border-transparent hover:border-black/10 text-sm font-medium text-primary font-cairo"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "ar" ? t("english") : t("arabic")}</span>
    </Button>
  );
}
