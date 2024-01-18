import React from "react";
import cn from "../../utils/cn";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={cn("fixed inset-0 bg-gray-400/70 invisible", {
        visible: isOpen,
      })}
    >
      <div className="bg-black">{children}</div>
    </div>
  );
};

export default Modal;
