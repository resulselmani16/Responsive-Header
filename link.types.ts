import React from "react";

export const variants = ["uppercase", "underline", "normal", "whiteUppercase", "whiteUnderline"] as const;

export type LinkVariant = typeof variants[number];

export type Props = {
  href: any;
  variant?: LinkVariant;
  children: React.ReactNode;
  className?: any;
  target?: string;
};

export type LinkProps = Props & React.HTMLAttributes<HTMLAnchorElement>;
