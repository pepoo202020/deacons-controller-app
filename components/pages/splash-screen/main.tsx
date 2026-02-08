"use client";
import Logo from "@/components/ui/logo";
import { useLanguage } from "@/context/LanguageContext";
import ChurchName from "./church-name";
import SchoolName from "./school-name";
import Loading from "@/components/ui/loading";
import Verse from "@/components/ui/verse";

export default function SplashScreenMain() {
  // use translated text
  const { t } = useLanguage();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-background overflow-hidden p-5">
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <Logo
          variant="splash"
          title={t("logo.title")}
          subtitle={t("logo.subtitle")}
        />
        <ChurchName churchName={t("splash.churchName")} />
        <SchoolName schoolName={t("splash.schoolName")} />
        <Loading variant="splash" message={t("splash.loading")} />
      </div>
      <Verse verse={t("verse")} verseRef={t("verseRef")} />
    </div>
  );
}
