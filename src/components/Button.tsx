import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../utils/cn";

type Tref = HTMLButtonElement;
type TVariant = "solid" | "gost" | "outline";
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<Tref, TButton>(
  ({ className, children, variant = "solid", ...rest }, ref) => {
    const getvariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "gost":
          return "btn-gost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getvariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
