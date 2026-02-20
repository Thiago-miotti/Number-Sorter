import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  icon: ReactNode;
}

export function Button({ icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex flex-row items-center gap-2 rounded-lg cursor-pointer p-[1.5px]",
        "hover:bg-linear-to-r from-[#77C0AF] from-0% via-[#D1DC97] via-14.84% via-[#E9A9B3] via-32.15% via-[#D586E0] via-65.79% to-[#91A1FA] to-84.58%",
        className,
      )}
      {...props}
    >
      <div
        className={twMerge(
          "flex flex-row items-center justify-center gap-2 rounded-lg bg-background-tertiary p-4 min-w-[478px]",
        )}
      >
        <span className="label-md text-content-primary">{children}</span>
        {icon}
      </div>
    </button>
  );
}
