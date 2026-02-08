"use client";
import { useLanguage } from "@/context/LanguageContext";
import { eventsData } from "@/data/events";
import { formatDate } from "@/services/ui/formateDate";
import { formateTime } from "@/services/ui/formateTime";
import { INextEventData } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";

export default function AttendanceDuringNextThirtyDays() {
  const { t, language } = useLanguage();
  const [events, setEvents] = useState<INextEventData[]>(eventsData);
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-start">
      {/* title and view all */}
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold ">
          {t("dashboard.overview.attendanceWithinLast30Days")}
        </h2>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-2 gap-5 w-full h-full overflow-y-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="w-full h-full px-5 py-3 bg-white rounded-lg relative"
          >
            <div
              className="w-3 absolute start-0 top-0 h-full rounded-r-lg"
              style={{ backgroundColor: event.eventColor }}
            />
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-xl font-bold text-blue-500">
                  {event.eventAttendance}
                </h2>
                <p className="text-sm  text-gray-500">{t("attendance")}</p>
              </div>
              <Link
                href={"/"}
                className="text-lg font-bold text-blue-500 border border-blue-500 px-2 py-2 rounded hover:bg-blue-500 hover:text-white"
              >
                <IoMdLogIn />
              </Link>
            </div>
            <p className="text-sm w-full text-gray-500">{event.eventTitle}</p>
            <div className="flex items-center gap-1 text-gray-400 text-[10px] w-full">
              <span>{formatDate(event.eventDate, language)}</span>
              <span>|</span>
              <span>{formateTime(event.eventStartTime, language)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
