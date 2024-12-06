import * as React from "react";

import { cn } from "../lib/utils";

type InputProps = {
  type: string;
  className?: string;
  icon?: React.ReactNode;
  handleClickIcon?: () => void;
} & React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type="text", icon, handleClickIcon= ()=> {}, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-2xl border-none bg-[#F8FAFF] px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent items-center",
          className
        )}
      >
        <input
          type={type}
          className={cn(
            "bg-transparent placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          value={props.value}
          {...props}
        />
        <button onClick={handleClickIcon}>{icon}</button>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
