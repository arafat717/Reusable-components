import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContex = createContext<TmodalContex | null>(null);

type TmodalContex = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TcloseButton = {
  children?: ReactNode;
};

type THeader = TcloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const contaunerRef = useRef<HTMLDivElement>(null);

  const handleModulOut = (e: MouseEvent) => {
    if (!contaunerRef.current?.contains(e.target as Node)) onClose();
  };

  return createPortal(
    <ModalContex.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-400/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleModulOut}
      >
        <div
          ref={contaunerRef}
          className="bg-white text-black w-full max-w-sm rounded-lg p-3"
        >
          {children}
        </div>
      </div>
      ,
    </ModalContex.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TcloseButton) => {
  const { onClose } = useContext(ModalContex) as TmodalContex;
  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 bg-red-600 rounded-md p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-2">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
