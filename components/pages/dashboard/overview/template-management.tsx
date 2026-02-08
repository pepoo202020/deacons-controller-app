"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { CiSettings } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

interface ITemplateManagementItem {
  title: string;
  checked: boolean;
  checkedClickHandler: (checked: boolean) => void;
}

interface ITemplateManagementProps {
  templateManagementItems: ITemplateManagementItem[];
}

export default function TemplateManagement({
  templateManagementItems,
}: ITemplateManagementProps) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-end">
      {/* popover */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <CiSettings />
            {t("dashboard.templateManagement.title")}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="rounded-sm flex flex-col items-start p-0 h-[200px]"
        >
          {/* scroll view */}
          <div className="overflow-y-auto w-full">
            {templateManagementItems.map((item) => (
              <TemplateManagementItem
                key={item.title}
                title={item.title}
                checked={item.checked}
                checkedClickHandler={item.checkedClickHandler}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const TemplateManagementItem = ({
  title,
  checked,
  checkedClickHandler,
}: {
  title: string;
  checked: boolean;
  checkedClickHandler: (checked: boolean) => void;
}) => {
  return (
    <div
      onClick={() => checkedClickHandler(!checked)}
      className={cn(
        "flex items-center w-full  justify-between cursor-pointer hover:bg-gray-100 px-5 py-3 rounded-sm",
        checked && "bg-gray-100",
      )}
    >
      <p>{title}</p>
      {checked && <FaCheck />}
    </div>
  );
};
