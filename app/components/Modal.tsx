'use client'
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: string
  parent?: string
  date: string
  timestamp: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style, parent, date, timestamp }) => {
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
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex ${parent} items-center z-50`}>
      <div className={`${style} rounded-lg shadow-lg p-6 relative max-w-md w-full`}>
        <div className="flex justify-between items-center">
        <p className=" flex gap-8 text-sm text-[#ddd]"><span>{date}</span> <span>{timestamp}</span></p>
        <button
          onClick={onClose}
          className="bg-white p-2 rounded-full hover:text-gray-800"
        >
          <RxCross2 className="text-[#0A192F] tex-lg"/>
        </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
