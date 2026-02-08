"use client";
import { Language } from "@/context/LanguageContext";
import { formatDate } from "@/services/ui/formateDate";
import { formateTime } from "@/services/ui/formateTime";
import { INextEventData } from "@/types/types";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import en from "@/locales/en.json";
import { IoMdMore } from "react-icons/io";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const actionsData = (t: (key: keyof typeof en) => string) => {
  return [
    { label: t("edit"), icon: "edit" },
    { label: t("delete"), icon: "delete" },
  ];
};

interface INextEventCardProps {
  event: INextEventData;
  language: Language;
  t: (key: keyof typeof en) => string;
}

export default function NextEventCard({
  event,
  language,
  t,
}: INextEventCardProps) {
  const Icon = LucideIcons[
    event.eventIcon as keyof typeof LucideIcons
  ] as React.ElementType;
  return (
    <div className="w-full px-10 py-5 flex items-center justify-between bg-white relative">
      <div
        className="absolute start-0 top-0 bottom-0 w-5"
        style={{ backgroundColor: event.eventColor }}
      />
      <div className="absolute end-0 top-0 p-2">
        <Popover>
          <PopoverTrigger className="cursor-pointer text-blue-500 bg-transparent border-none p-0 outline-none">
            <IoMdMore size={25} />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-25 p-0">
            <ActionsPopoverContent t={t} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col items-start justify-center">
        {/* event icon */}
        {Icon && <Icon className="w-5 h-5 text-gray-500" />}
        <Link
          href={"/"}
          className="text-sm font-bold text-blue-500 hover:underline"
        >
          {event.eventTitle}
        </Link>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>{formatDate(event.eventDate, language)}</span>
          <span>|</span>
          <span>{formateTime(event.eventStartTime, language)}</span>
          <span>{t("to")}</span>
          <span>{formateTime(event.eventEndTime, language)}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-700 text-sm">
          <span>{t("attendance")}</span>
          <span>:</span>
          <span>{event.eventAttendance}</span>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-sm font-bold text-blue-500 border border-blue-500 px-2 py-2 rounded hover:bg-blue-500 hover:text-white"
      >
        {t("attendanceCheckIn")}
      </Link>
    </div>
  );
}

const ActionsPopoverContent = ({
  t,
}: {
  t: (key: keyof typeof en) => string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center w-full p-0">
      {actionsData(t).map((action) => (
        <div
          key={action.label}
          className={cn(
            "flex items-center gap-1 text-sm cursor-pointer hover:bg-gray-100 px-2 py-2 rounded w-full",
            action.label === t("delete") && "text-red-500",
            action.label === t("edit") && "text-gray-500",
          )}
        >
          <span>{action.label}</span>
        </div>
      ))}
    </div>
  );
};
