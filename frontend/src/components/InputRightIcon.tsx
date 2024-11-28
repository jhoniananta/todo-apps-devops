import * as React from "react";

import { cn } from "../lib/utils";
import { IoSearchOutline } from "react-icons/io5";


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
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
          {...props}
        />
        <IoSearchOutline className="" />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
