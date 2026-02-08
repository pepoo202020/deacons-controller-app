"use client";

import GlobalButton from "@/components/ui/global-button";
import { Language, useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import en from "@/locales/en.json";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface IStatusBarData {
  key: string;
  value: { Language: Language; value: string }[];
}

const statusBarData = (): IStatusBarData[] => {
  return [
    {
      key: "currentTermValue",
      value: [
        { Language: "en", value: "Term 1" },
        { Language: "ar", value: "الترم الأول" },
      ],
    },
    {
      key: "currentYearValue",
      value: [
        { Language: "en", value: "2024" },
        { Language: "ar", value: "2024" },
      ],
    },
    {
      key: "caseStudyValue",
      value: [
        { Language: "en", value: "Start of exams" },
        { Language: "ar", value: "بداية الامتحانات" },
      ],
    },
  ];
};

export default function StatusBar() {
  const { t, language } = useLanguage();
  const [show, setShow] = useState<boolean>(true);

  const handleShowStatusBar = () => {
    setShow(false);
  };
  return (
    <div
      className={cn(
        "w-full py-3 flex items-center justify-between px-5 rounded-lg shadow-xl drop-shadow-xl bg-primary/50 text-primary font-bold relative",
        !show && "hidden",
      )}
    >
      {/* current term */}
      <div className="flex flex-col items-center justify-center">
        <p>{t("dashboard.statusBar.currentTermTitle")}</p>
        <p>
          {
            statusBarData()
              .find((item) => item.key === "currentTermValue")
              ?.value.find((item) => item.Language === language)?.value
          }
        </p>
      </div>
      {/* current year */}
      <div className="flex flex-col items-center justify-center">
        <p>{t("dashboard.statusBar.currentYearTitle")}</p>
        <p>
          {
            statusBarData()
              .find((item) => item.key === "currentYearValue")
              ?.value.find((item) => item.Language === language)?.value
          }
        </p>
      </div>
      {/* current  Academic year status*/}
      <div className="flex flex-col items-center justify-center">
        <p>{t("dashboard.statusBar.caseStudy")}</p>
        <p className="uppercase">
          {
            statusBarData()
              .find((item) => item.key === "caseStudyValue")
              ?.value.find((item) => item.Language === language)?.value
          }
        </p>
      </div>
      <GlobalButton
        type="icon"
        onClick={handleShowStatusBar}
        disabled={false}
        className="bg-transparent text-primary absolute top-0 end-0 hover:bg-transparent cursor-pointer"
      >
        <IoMdCloseCircle />
      </GlobalButton>
    </div>
  );
}
