import { INextEventData } from "@/types/types";

const getUpcomingDate = (daysFromNow: number) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date;
};

const getEventTime = (daysFromNow: number, hours: number, minutes: number) => {
  const date = getUpcomingDate(daysFromNow);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

export const eventsData: INextEventData[] = [
  {
    id: crypto.randomUUID(),
    eventColor: "#3B82F6", // Blue
    eventTitle: "Annual General Meeting",
    eventIcon: "Users",
    eventDate: getUpcomingDate(2),
    eventStartTime: getEventTime(2, 9, 0),
    eventEndTime: getEventTime(2, 11, 0),
    eventAttendance: 120,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#EF4444", // Red
    eventTitle: "Product Launch",
    eventIcon: "Rocket",
    eventDate: getUpcomingDate(4),
    eventStartTime: getEventTime(4, 14, 0),
    eventEndTime: getEventTime(4, 16, 0),
    eventAttendance: 250,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#10B981", // Green
    eventTitle: "Safety Training",
    eventIcon: "ShieldCheck",
    eventDate: getUpcomingDate(5),
    eventStartTime: getEventTime(5, 10, 0),
    eventEndTime: getEventTime(5, 12, 0),
    eventAttendance: 45,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#F59E0B", // Amber
    eventTitle: "Client Workshop",
    eventIcon: "Briefcase",
    eventDate: getUpcomingDate(7),
    eventStartTime: getEventTime(7, 13, 0),
    eventEndTime: getEventTime(7, 15, 0),
    eventAttendance: 20,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#8B5CF6", // Violet
    eventTitle: "Marketing Strategy",
    eventIcon: "PieChart",
    eventDate: getUpcomingDate(8),
    eventStartTime: getEventTime(8, 11, 0),
    eventEndTime: getEventTime(8, 12, 30),
    eventAttendance: 12,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#EC4899", // Pink
    eventTitle: "Team Bonding",
    eventIcon: "Heart",
    eventDate: getUpcomingDate(10),
    eventStartTime: getEventTime(10, 16, 0),
    eventEndTime: getEventTime(10, 19, 0),
    eventAttendance: 80,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#06B6D4", // Cyan
    eventTitle: "Tech Conference",
    eventIcon: "Cpu",
    eventDate: getUpcomingDate(12),
    eventStartTime: getEventTime(12, 9, 30),
    eventEndTime: getEventTime(12, 17, 0),
    eventAttendance: 500,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#F97316", // Orange
    eventTitle: "Board Meeting",
    eventIcon: "ClipboardList",
    eventDate: getUpcomingDate(14),
    eventStartTime: getEventTime(14, 10, 0),
    eventEndTime: getEventTime(14, 12, 0),
    eventAttendance: 10,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#6366F1", // Indigo
    eventTitle: "Project Kickoff",
    eventIcon: "Flag",
    eventDate: getUpcomingDate(16),
    eventStartTime: getEventTime(16, 11, 0),
    eventEndTime: getEventTime(16, 12, 0),
    eventAttendance: 25,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#14B8A6", // Teal
    eventTitle: "Sustainability Audit",
    eventIcon: "Leaf",
    eventDate: getUpcomingDate(18),
    eventStartTime: getEventTime(18, 9, 0),
    eventEndTime: getEventTime(18, 15, 0),
    eventAttendance: 5,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#D946EF", // Fuchsia
    eventTitle: "Design Sprint",
    eventIcon: "PenTool",
    eventDate: getUpcomingDate(20),
    eventStartTime: getEventTime(20, 10, 0),
    eventEndTime: getEventTime(20, 16, 0),
    eventAttendance: 8,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#84CC16", // Lime
    eventTitle: "Employee Health Check",
    eventIcon: "Activity",
    eventDate: getUpcomingDate(22),
    eventStartTime: getEventTime(22, 8, 30),
    eventEndTime: getEventTime(22, 12, 30),
    eventAttendance: 150,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#A855F7", // Purple
    eventTitle: "Networking Event",
    eventIcon: "Globe",
    eventDate: getUpcomingDate(25),
    eventStartTime: getEventTime(25, 18, 0),
    eventEndTime: getEventTime(25, 21, 0),
    eventAttendance: 60,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#E11D48", // Rose
    eventTitle: "Crisis Management Drill",
    eventIcon: "AlertTriangle",
    eventDate: getUpcomingDate(27),
    eventStartTime: getEventTime(27, 14, 0),
    eventEndTime: getEventTime(27, 16, 0),
    eventAttendance: 30,
  },
  {
    id: crypto.randomUUID(),
    eventColor: "#0F766E", // Teal 700
    eventTitle: "Year End Review",
    eventIcon: "Calendar",
    eventDate: getUpcomingDate(29),
    eventStartTime: getEventTime(29, 9, 0),
    eventEndTime: getEventTime(29, 13, 0),
    eventAttendance: 100,
  },
];
