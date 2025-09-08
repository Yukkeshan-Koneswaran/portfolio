import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "nav";
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "glass-card",
      hover: "glass-card hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]",
      nav: "glass-nav",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl backdrop-blur-sm",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };