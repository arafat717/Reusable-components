import cn from "../utils/cn";

const Button = ({ className, children, variant }) => {
  const getvariant = (variant) => {
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
    <button className={cn(getvariant(variant), className)}>{children}</button>
  );
};

export default Button;
