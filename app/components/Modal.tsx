'use client'
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: string
  parent?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style, parent }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if(!isOpen) return null
  
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex ${parent} items-center z-20`}>
      <div className={`${style} rounded-lg shadow-lg p-6 relative max-w-md w-full`}>
        <div className="flex justify-between items-center">
        <p className="text-sm text-[#ddd]">September 2024, 9:59pm</p>
        <button
          onClick={onClose}
          className=" hover:text-gray-800"
        >
          <RxCross2 className="text-white tex-lg"/>
        </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
