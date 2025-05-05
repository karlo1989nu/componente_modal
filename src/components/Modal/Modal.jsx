import React, { useEffect, useState, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => closeButtonRef.current?.focus(), 0); // Enfoca el botón de cierre
    } else {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!showModal && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 relative transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
