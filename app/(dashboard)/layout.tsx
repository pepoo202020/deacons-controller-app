import DashboardHeader from "@/components/pages/dashboard/layout/dashboard-header";
import DashboardSidebar from "@/components/pages/dashboard/layout/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-start">
      {/* dashboard header */}
      <DashboardHeader />
      <div className="w-full h-full overflow-hidden flex flex-row items-start">
        {/* dashboard sidebar */}
        <DashboardSidebar />
        {/* dashboard content */}
        <div className="w-full h-[calc(100%-80px)] lg:h-full overflow-y-auto bg-gray-200 py-10 px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
