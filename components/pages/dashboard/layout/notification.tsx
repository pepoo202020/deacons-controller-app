"use client";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Language } from "@/context/LanguageContext";
import useViewport from "@/services/hooks/useIsMobile";

interface INotificationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: Language;
}

export default function Notification({
  open,
  onOpenChange,
  language,
}: INotificationProps) {
  const { isDesktop } = useViewport();
  return (
    <div>
      {!isDesktop ? (
        <NotificationSheet
          open={open}
          onOpenChange={onOpenChange}
          language={language}
        />
      ) : (
        <NotificationDialog
          open={open}
          onOpenChange={onOpenChange}
          language={language}
        />
      )}
    </div>
  );
}

const NotificationDialog = ({ open, onOpenChange }: INotificationProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverContent>popover</PopoverContent>
    </Popover>
  );
};

const NotificationSheet = ({
  open,
  onOpenChange,
  language,
}: INotificationProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        lang={language === "ar" ? "ar" : "en"}
        side={language === "ar" ? "left" : "right"}
      >
        sheet
      </SheetContent>
    </Sheet>
  );
};
