import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg shadow-sm hover:shadow-md",
        outline: "border-2 border-border bg-background hover:bg-secondary/20 hover:border-primary/50 rounded-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg shadow-sm hover:shadow-md",
        ghost: "hover:bg-secondary/30 hover:text-primary rounded-lg",
        link: "text-accent underline-offset-4 hover:underline hover:text-[hsl(var(--accent-hover))]",
        accent: "bg-accent text-accent-foreground hover:bg-[hsl(var(--accent-hover))] rounded-lg shadow-glow hover:shadow-glow-hover transform hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-13 rounded-lg px-8 text-base",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
