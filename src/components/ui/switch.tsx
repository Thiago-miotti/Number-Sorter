import * as RadixSwitch from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

interface SwitchProps extends RadixSwitch.SwitchProps {}

export function Switch(props: SwitchProps) {
  return (
    <RadixSwitch.Root
      className={twMerge(
        "relative h-7.25 w-11 cursor-pointer rounded-full bg-content-tertiary ",
        "outline-none data-[state=checked]:bg-linear-to-r data-[state=checked]:from-[#D586E0] from-0% data-[state=checked]:to-[#91A1FA] to-98.93%",
      )}
      {...props}
    >
      <RadixSwitch.Thumb
        className={twMerge(
          "block size-5.25 translate-x-0.5 rounded-full bg-content-primary",
          "transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-4.75",
        )}
      />
    </RadixSwitch.Root>
  );
}
