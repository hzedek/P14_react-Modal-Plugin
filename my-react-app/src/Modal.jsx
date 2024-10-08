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
