import { Language } from "@/context/LanguageContext";

const arabicDays: string[] = [
  "السبت",
  "الاحد",
  "الاثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعة",
];

const arabicMonths: string[] = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

export const formatDate = (date: Date, language: Language) => {
  // saturday 07 february 2026
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  if (language === "ar") {
    return `${arabicDays[date.getDay()]} ${dayOfMonth} ${arabicMonths[date.getMonth()]} ${year}`;
  }
  return `${day} ${dayOfMonth} ${month} ${year}`;
};
