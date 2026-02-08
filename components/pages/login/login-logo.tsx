import Logo from "@/components/ui/logo";
import en from "@/locales/en.json";

interface ILoginLogoProps {
  t: (key: keyof typeof en) => string;
}

export default function LoginLogo({ t }: ILoginLogoProps) {
  return (
    <div>
      <Logo
        variant="header-login"
        title={t("logo.title")}
        subtitle={t("logo.subtitle")}
      />
    </div>
  );
}
