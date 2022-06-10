import { HTMLAttributes } from "react";

export const ImageVariants = ["square", "landscape", "wideLandscape"] as const;

export type ImageVariant = typeof ImageVariants[number]

export type Props = {
  src?: string;
  dataSrc: string,
  alt: string;
  variant?: ImageVariant,
  className?: string;
};

export type ImageProps = Props & HTMLAttributes<HTMLImageElement>;
