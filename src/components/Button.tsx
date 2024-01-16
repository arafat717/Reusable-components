import React from "react";

const Button = ({ className, children }) => {
  return (
    <button className={`bg-green-500 px-3 py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
