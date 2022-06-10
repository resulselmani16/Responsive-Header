import { ImageProps } from "./image.types";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

export const ratioClasses = {
  square: "aspect-1/1 rounded-full lazyload object-contain object-center",
  landscape: "aspect-4/3 lazyload object-contain object-center",
  wideLandscape: "aspect-5/3 lazyload object-contain object-center",
};

const Image = ({
  src,
  variant = "landscape",
  alt,
  dataSrc,
  ...rest
}: ImageProps) => {
  return (
    <picture {...rest}>
      <source data-src={dataSrc} />
      <img
        className={ratioClasses[variant]}
        src={src}
        data-src={dataSrc}
        alt={alt}
      />
    </picture>
  );
};

export default Image;
