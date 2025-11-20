import { X } from 'lucide-react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;