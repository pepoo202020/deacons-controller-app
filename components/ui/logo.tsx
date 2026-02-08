import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("flex items-center gap-3 transition-all", {
  variants: {
    variant: {
      splash: "flex-row gap-3 md:gap-5",
      "header-desktop": "flex-row gap-1",
      "header-login": "flex-row gap-1",
      "header-mobile": "flex-row gap-2",
      sidebar: "flex-row gap-3",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "header-desktop",
    size: "default",
  },
});

const imageVariants = cva("relative object-contain transition-all block", {
  variants: {
    variant: {
      splash: "w-32 h-32 md:w-48 md:h-48",
      "header-desktop": "w-12 h-12",
      "header-login": "w-20 h-20",
      "header-mobile": "w-8 h-8",
      sidebar: "w-10 h-10",
    },
  },
  defaultVariants: {
    variant: "header-desktop",
  },
});

const titleVariants = cva(
  "font-bold leading-none text-primary transition-all",
  {
    variants: {
      variant: {
        splash: "text-3xl md:text-5xl text-start",
        "header-desktop": "text-xl",
        "header-login": "text-3xl",
        "header-mobile": "text-lg",
        sidebar: "text-lg",
      },
    },
    defaultVariants: {
      variant: "header-desktop",
    },
  },
);

const subtitleVariants = cva(
  "text-muted-foreground leading-none transition-all",
  {
    variants: {
      variant: {
        splash: "text-xl md:text-3xl text-center mt-2",
        "header-desktop": "text-xs",
        "header-login": "text-xl",
        "header-mobile": "text-[10px]",
        sidebar: "text-[10px]",
      },
    },
    defaultVariants: {
      variant: "header-desktop",
    },
  },
);

export interface LogoProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  title?: string;
  subtitle?: string;
  showText?: boolean;
}

export default function Logo({
  className,
  variant,
  size,
  title = "Deacons",
  subtitle = "Control System",
  showText = true,
  ...props
}: LogoProps) {
  return (
    <div className={cn(logoVariants({ variant, size, className }))} {...props}>
      <div className={cn(imageVariants({ variant }))}>
        <Image
          src="/logo.png"
          alt={`${title} Logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn(titleVariants({ variant }))}>{title}</span>
          {subtitle && (
            <span className={cn(subtitleVariants({ variant }))}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
