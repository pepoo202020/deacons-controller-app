"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";
import { INextEventData } from "@/types/types";
import { eventsData } from "@/data/events";
import NextEventCard from "./next-event-card";

export default function NextEvents() {
  const { t, language } = useLanguage();
  const [events, setEvents] = useState<INextEventData[]>(eventsData);

  return (
    <>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-start">
        {/* title and view all */}
        <div className="w-full flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold ">
            {t("dashboard.overview.upcomingEventsWithin30Days")}
          </h2>
          <Link
            href={"/"}
            className="text-sm text-blue-800 font-bold hover:underline"
          >
            {t("viewAll")}
          </Link>
        </div>
        <div className="w-full  bg-white rounded-lg overflow-x-hidden space-y-px">
          {events.map((event) => (
            <NextEventCard
              key={event.id}
              event={event}
              language={language}
              t={t}
            />
          ))}
        </div>
      </div>
    </>
  );
}
