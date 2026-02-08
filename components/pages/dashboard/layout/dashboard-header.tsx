"use client";
import Logo from "@/components/ui/logo";
import Search from "@/components/ui/search";
import { useLanguage } from "@/context/LanguageContext";
import { FaBars } from "react-icons/fa6";
import Notification from "./notification";
import { useState } from "react";
import { IoIosNotifications, IoMdNotificationsOff } from "react-icons/io";
import useViewport from "@/services/hooks/useIsMobile";

export default function DashboardHeader() {
  const { t, language } = useLanguage();
  const { isMobile } = useViewport();
  const notifications = 2;
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const notificationHandler = () => {
    setNotificationOpen((pre) => !pre);
  };

  return (
    <>
      <div className="w-full h-16 bg-white shadow-sm flex items-center px-10 ">
        {/* logo */}
        <div className="w-60">
          <Logo title={t("logo.title")} subtitle={t("logo.subtitle")} />
        </div>
        <div className="w-full flex items-center justify-between px-5">
          <div className=" items-center gap-2 hidden lg:flex">
            {/* sidebar toggler */}
            <FaBars size={24} className="text-primary" />
            {/* page name */}
            <h1 className="text-xl font-semibold text-primary">
              {t("dashboard.overview.pagename")}
            </h1>
          </div>
          <div className="flex items-center justify-end gap-5 w-full">
            {/* search item */}
            {!isMobile && <Search t={t} />}
            {/* notification item */}
            <div className="relative">
              {notifications > 0 ? (
                <IoIosNotifications
                  onClick={notificationHandler}
                  size={24}
                  className="text-primary cursor-pointer"
                />
              ) : (
                <IoMdNotificationsOff size={24} className="text-primary " />
              )}
              {notifications > 0 && (
                <span className="absolute top-[-5px] right-[-5px] text-[10px] px-[5px] py-[2px]  text-white bg-primary rounded-full">
                  {notifications}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notification
        open={notificationOpen}
        onOpenChange={notificationHandler}
        language={language}
      />
    </>
  );
}
