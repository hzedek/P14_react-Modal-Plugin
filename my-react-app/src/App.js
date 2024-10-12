import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>
        <span>#</span>Example 1: Open &amp; Close with links
      </h2>

      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>My Modal Content</h1>
        <p>
          Thanks for clicking. That felt good. <br />
          Click on <span>Close</span>, click the overlay, or press ESC
        </p>
      </Modal>
    </div>
  );
};

export default App;
