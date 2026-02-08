import { Button } from "./button";

interface IGlobalButtonProps {
  type: "submit" | "button" | "reset" | "link" | "icon";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GlobalButton({
  type,
  onClick,
  disabled,
  className,
  children,
}: IGlobalButtonProps) {
  return (
    <Button
      type={type === "link" || type === "icon" ? "button" : type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
}
