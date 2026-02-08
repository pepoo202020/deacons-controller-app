import LoginHeader from "@/components/pages/login/login-header";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-200 h-screen w-screen overflow-hidden p-5 flex flex-col gap-5">
      <div className="w-full max-w-[500px] mx-auto">
        <LoginHeader />
      </div>
      <div className="max-w-[500px] mx-auto w-full flex-1">{children}</div>
    </div>
  );
}
