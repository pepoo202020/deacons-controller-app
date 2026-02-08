import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const loadingVariants = cva(
  "flex flex-col items-center justify-center gap-4 transition-all duration-300",
  {
    variants: {
      variant: {
        modal:
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm shadow-md",
        data: "w-full min-h-[200px] h-full p-8",
        splash: "text-primary my-10",
      },
    },
    defaultVariants: {
      variant: "data",
    },
  }
);

const iconVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      default: "w-8 h-8",
      sm: "w-4 h-4",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  icon?: "circle" | "bars" | "dots";
  message?: string;
  iconSize?: VariantProps<typeof iconVariants>["size"];
}

export default function Loading({
  className,
  variant,
  icon = "circle",
  iconSize = "default",
  message,
  ...props
}: LoadingProps) {
  return (
    <div className={cn(loadingVariants({ variant, className }))} {...props}>
      {icon === "circle" && (
        <Loader2 className={cn(iconVariants({ size: iconSize }))} />
      )}
      
      {icon === "bars" && (
        <div className="flex space-x-1">
          <div className="h-8 w-2 bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-2 bg-primary animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-2 bg-primary animate-bounce"></div>
        </div>
      )}

      {icon === "dots" && (
         <div className="flex space-x-2 justify-center items-center">
            <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      )}

      {message && (
        <p className="text-muted-foreground text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}