import React from "react";
import { LinkProps } from "./link.types";
export const classesMap = {
  uppercase: "text-black font-medium uppercase hover:underline",
  underline: "underline font-medium text-black",
  normal: "text-black font-medium hover:text-black-secondary",
  whiteUppercase: "text-white font-bold uppercase",
  whiteUnderline: "underline font-medium text-white capitalize",
};

const Link = ({ href, variant = "normal", target = "_self", children, className, ...rest }: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      {...rest}
      className={`${classesMap[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
