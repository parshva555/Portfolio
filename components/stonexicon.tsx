import React from "react";
import Image from "next/image";
import stonexLogo from "@/public/stonex.png";
import stonexLogoDark from "@/public/stonexdark.jpg";
import { useTheme } from "@/context/theme-context";

export const StoneXIcon: React.FC = () => {
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? stonexLogo : stonexLogoDark;

  // Conditional styles for dark vs light logo
  const logoStyle: React.CSSProperties =
    theme === "light"
      ? { borderRadius: "4px", objectFit: "contain", marginTop: "18px", marginLeft: "3px" }
      : { borderRadius: "50%", objectFit: "cover", marginTop: "0px", marginLeft: "0px" }; // example for dark logo

  const width = theme === "light" ? 55 : 60; // different width for dark logo
  const height = theme === "light" ? 21 : 24; // different height for dark logo

  return (
    <Image
      src={logoSrc}
      alt="StoneX Group Inc. Logo"
      width={width}
      height={height}
      style={logoStyle}
    />
  );
};
