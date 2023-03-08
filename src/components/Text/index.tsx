import React from "react";

const variantClasses = {
  h1: "font-light sm:text-[37.5px] md:text-[43.5px] text-[47.5px]",
  h2: "font-normal sm:text-[18.5px] md:text-[20.5px] text-[22.5px]",
  h3: "font-medium sm:text-[17.5px] md:text-[19.5px] text-[21.5px]",
  h4: "font-medium text-[18px]",
  h5: "font-medium text-[17px]",
  h6: "text-[16px]",
  body1: "font-normal text-[15px]",
  body2: "font-normal text-[14px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
