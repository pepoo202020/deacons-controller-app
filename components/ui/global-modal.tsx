"use client";

import useViewport from "@/services/hooks/useIsMobile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";

interface IGlobalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  content: React.ReactNode;
}

export default function GlobalModal({
  open,
  onOpenChange,
  title,
  description,
  content,
}: IGlobalModalProps) {
  const { isDesktop } = useViewport();
  return (
    <div className="">
      {isDesktop ? (
        <DesktopViewComponent
          open={open}
          onOpenChange={onOpenChange}
          title={title}
          description={description}
          content={content}
        />
      ) : (
        <SmallViewPortComponent
          open={open}
          onOpenChange={onOpenChange}
          title={title}
          description={description}
          content={content}
        />
      )}
    </div>
  );
}

const DesktopViewComponent = ({
  open,
  onOpenChange,
  title,
  description,
  content,
}: IGlobalModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-5">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};

const SmallViewPortComponent = ({
  open,
  onOpenChange,
  title,
  description,
  content,
}: IGlobalModalProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="p-5">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {content}
      </SheetContent>
    </Sheet>
  );
};
