"use client";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import useViewport from "@/services/hooks/useIsMobile";
import { IconType } from "react-icons";
import { FaHome, FaUsers, FaCalendar, FaTools } from "react-icons/fa";
import en from "@/locales/en.json";
import Link from "next/link";
import { BiSolidGroup } from "react-icons/bi";
import { MdEventAvailable, MdOutlineSecurity } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GrPlan } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { SiAnswer } from "react-icons/si";
import { usePathname } from "next/navigation";

interface IItem {
  name: string;
  link: string;
  icon: IconType;
}

const items = (t: (key: keyof typeof en) => string): IItem[] => {
  return [
    {
      name: t("dashboard.overview.pagename"),
      link: "/dashboard",
      icon: FaHome,
    },
    {
      name: t("dashboard.members.pagename"),
      link: "/dashboard/members",
      icon: FaUsers,
    },
    {
      name: t("dashboard.classes.pagename"),
      link: "/dashboard/classes",
      icon: BiSolidGroup,
    },
    {
      name: t("dashboard.events.pagename"),
      link: "/dashboard/events",
      icon: MdEventAvailable,
    },
    {
      name: t("dashboard.missing.pagename"),
      link: "/dashboard/missing",
      icon: FaHandshakeSimple,
    },
    {
      name: t("dashboard.calendar.pagename"),
      link: "/dashboard/calendar",
      icon: FaCalendar,
    },
    {
      name: t("dashboard.years.planning.pagename"),
      link: "/dashboard/years-planning",
      icon: GrPlan,
    },
    {
      name: t("dashboard.users.pagename"),
      link: "/dashboard/users",
      icon: FaUsers,
    },
    {
      name: t("dashboard.roles.pagename"),
      link: "/dashboard/roles",
      icon: MdOutlineSecurity,
    },
    {
      name: t("dashboard.settings.pagename"),
      link: "/dashboard/settings",
      icon: IoIosSettings,
    },
    {
      name: t("dashboard.tools.pagename"),
      link: "/dashboard/tools",
      icon: FaTools,
    },
    {
      name: t("dashboard.exams.pagename"),
      link: "/dashboard/exams",
      icon: PiExamFill,
    },
    {
      name: t("dashboard.results.pagename"),
      link: "/dashboard/results",
      icon: SiAnswer,
    },
  ];
};

export default function DashboardSidebar() {
  const { language, t } = useLanguage();
  const { isDesktop } = useViewport();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        isDesktop
          ? "w-60 h-full flex flex-col items-start gap-5 px-5 py-5"
          : "w-screen h-20 flex items-center overflow-x-auto overflow-y-hidden gap-5 px-5 fixed bottom-0 left-0 right-0 border-t-2",
        language === "ar" ? "border-l-2" : "border-r-2",
        "bg-white",
      )}
    >
      {/* sidebar items */}
      {items(t).map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className={cn(
            isDesktop
              ? "flex flex-row items-center gap-2 w-full h-full"
              : "flex flex-col items-center justify-center gap-2 h-full w-[100px] ",

            pathname === item.link
              ? "bg-primary text-white px-5"
              : "hover:bg-gray-100 lg:hover:px-2",
          )}
        >
          <item.icon className={cn(isDesktop ? "w-6 h-6" : "w-4 h-4")} />
          <span className={cn(isDesktop ? "text-sm" : "text-xs w-full")}>
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
