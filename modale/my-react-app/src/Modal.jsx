import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, fadeDuration = 300 }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), fadeDuration);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, fadeDuration]);

  useEffect(() => {
    const handleEsc = (event) => {
      event.preventDefault()
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Ajoute un écouteur pour la touche "Esc"
    window.addEventListener('keydown', handleEsc);

    // on enleve l'event "Esc" au démontage du composant
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: isOpen ? 1 : 0
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
