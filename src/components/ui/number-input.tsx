import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NumberInputProps extends ComponentProps<"input"> {
  label: string;
}

export function NumberInput({ label, ...props }: NumberInputProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="label-md text-content-secondary">{label}</p>

      <div
        className={twMerge(
          "p-[1.5px] w-24 h-auto flex items-center justify-center text-content-primary title-sm rounded-lg",
          "hover:bg-linear-to-r from-[#77C0AF] from-0% via-[#D1DC97] via-14.84% via-[#E9A9B3] via-32.15% via-[#D586E0] via-65.79% to-[#91A1FA] to-84.58%",
          "focus-within:bg-linear-to-r from-[#77C0AF] from-0% via-[#D1DC97] via-14.84% via-[#E9A9B3] via-32.15% via-[#D586E0] via-65.79% to-[#91A1FA] to-84.58%",
        )}
      >
        <input
          type="text"
          className={twMerge(
            "px-2 w-23 bg-background-secondary rounded-lg focus:outline-none focus:ring-0 focus:border-none",
          )}
          {...props}
        />
      </div>
    </div>
  );
}
