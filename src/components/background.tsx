import type { ReactNode } from "react";
import BackgroundImage from "../assets/BgImage1x.png";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div
      className="relative w-full h-screen bg-background-primary overflow-clip"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-background-primary via-background-primary to-background-primary/10"></div>

      <div className="relative z-10 w-full h-screen">{children}</div>
    </div>
  );
}
