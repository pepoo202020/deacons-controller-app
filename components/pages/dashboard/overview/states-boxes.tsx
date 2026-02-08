"use client";
import { useState } from "react";
import TemplateManagement from "./template-management";
import {
  FaUsers,
  FaCalendar,
  FaUserTimes,
  FaCalendarAlt,
  FaChartLine,
  FaUser,
  FaUserTag,
  FaGraduationCap,
  FaChartBar,
} from "react-icons/fa";

import en from "@/locales/en.json";
import { useLanguage } from "@/context/LanguageContext";

interface IStateBoxConfig {
  id: string; // Add a stable ID for state management
  value: number;
  titleKey: keyof typeof en;
  icon: React.ReactNode;
}

const STATE_BOX_CONFIG: IStateBoxConfig[] = [
  {
    id: "members",
    value: 10,
    titleKey: "dashboard.members.pagename",
    icon: <FaUsers />,
  },
  {
    id: "users",
    value: 20,
    titleKey: "dashboard.users.pagename",
    icon: <FaChartBar />,
  },
  {
    id: "classes",
    value: 30,
    titleKey: "dashboard.classes.pagename",
    icon: <FaCalendar />,
  },
  {
    id: "newMember",
    value: 40,
    titleKey: "dashboard.stateBoxes.newMember",
    icon: <FaUserTimes />,
  },
  {
    id: "birthdays",
    value: 50,
    titleKey: "dashboard.stateBoxes.birthdays",
    icon: <FaCalendarAlt />,
  },
  {
    id: "missing",
    value: 60,
    titleKey: "dashboard.missing.pagename",
    icon: <FaChartLine />,
  },
  {
    id: "events",
    value: 70,
    titleKey: "dashboard.events.pagename",
    icon: <FaUser />,
  },
  {
    id: "roles",
    value: 80,
    titleKey: "dashboard.roles.pagename",
    icon: <FaUserTag />,
  },

  {
    id: "exams",
    value: 110,
    titleKey: "dashboard.exams.pagename",
    icon: <FaGraduationCap />,
  },
  {
    id: "qualifiedMembers",
    value: 120,
    titleKey: "dashboard.stateBoxes.qualifiedMembers",
    icon: <FaChartBar />,
  },
  {
    id: "unQualifiedMembers",
    value: 120,
    titleKey: "dashboard.stateBoxes.unQualifiedMembers",
    icon: <FaChartBar />,
  },
];

export default function StatesBoxes() {
  const { t } = useLanguage();
  // State only stores visibility, indexed by ID
  const [hiddenBoxIds, setHiddenBoxIds] = useState<string[]>([]);

  const toggleBoxVisibility = (id: string, isChecked: boolean) => {
    setHiddenBoxIds((prev) =>
      isChecked ? prev.filter((boxId) => boxId !== id) : [...prev, id],
    );
  };

  const templateManagementItems = STATE_BOX_CONFIG.map((config) => {
    return {
      title: t(config.titleKey),
      checked: !hiddenBoxIds.includes(config.id),
      checkedClickHandler: (checked: boolean) => {
        toggleBoxVisibility(config.id, checked);
      },
    };
  });

  return (
    <div className="w-full">
      {/* Template management */}
      <TemplateManagement templateManagementItems={templateManagementItems} />
      {/* stateBox */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 my-5">
        {STATE_BOX_CONFIG.filter(
          (config) => !hiddenBoxIds.includes(config.id),
        ).map((config) => (
          <StateBox
            key={config.id}
            title={t(config.titleKey)}
            value={config.value}
            icon={config.icon}
          />
        ))}
      </div>
    </div>
  );
}

const StateBox = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <div className="w-full bg-white shadow-sm border rounded-sm p-5 cursor-pointer flex flex-col items-center justify-center ">
      <p className="text-xl font-medium">{icon}</p>

      <p className="font-bold text-xl hover:underline text-blue-500 mt-2 mb-0">
        {value}
      </p>
      <p className="text-sm font-medium text-gray-500 capitalize text-center">
        {title}
      </p>
    </div>
  );
};
