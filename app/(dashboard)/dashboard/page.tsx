import AttendanceDuringNextThirtyDays from "@/components/pages/dashboard/overview/attendance-during-next-thirty-days";
import NextEvents from "@/components/pages/dashboard/overview/next-events";
import StatesBoxes from "@/components/pages/dashboard/overview/states-boxes";
import StatusBar from "@/components/pages/dashboard/overview/status-bar";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-5">
      {/* Status Bar */}
      <StatusBar />
      {/*  States Boxes */}
      <StatesBoxes />
      {/* next events && attendance during 30 days for attendance */}
      <div className="w-full h-full flex flex-col lg:flex-row items-start justify-start p-5 gap-5 ">
        <NextEvents />
        <AttendanceDuringNextThirtyDays />
      </div>
    </div>
  );
}
