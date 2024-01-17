import cn from "../utils/cn";

const Button = ({ className, children, outline }) => {
  return (
    <button
      className={cn(
        "bg-purple-500 px-3 py-2 rounded-lg",
        {
          "border border-purple-600 bg-opacity-10": outline,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
