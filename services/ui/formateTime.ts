import { Language } from "@/context/LanguageContext";

const arabicTimesRange: string[] = ["ص", "م"];

export const formateTime = (date: Date, language: Language) => {
  // 07:00 AM , hours and minutes in 2 digits
  // 07:00 PM
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? arabicTimesRange[1] : arabicTimesRange[0];
  const hours12 = hours % 12;
  if (language === "ar") {
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${amPm}`;
  }
  return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};
