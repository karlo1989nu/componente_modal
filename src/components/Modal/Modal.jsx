import React, { useEffect, useState, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => closeButtonRef.current?.focus(), 0); // Enfoca el botón de cierre
    } else {
      setTimeout(() => setShowModal(false), 300); // Espera a que termine la animación
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 relative transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()} // Evita que los clics dentro del contenido cierren el modal
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
