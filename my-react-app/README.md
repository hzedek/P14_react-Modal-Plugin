# my-react-app-hakim10

A lightweight React modal component for displaying content in a modal overlay, with support for fade-in and fade-out animations.

## Installation

To install the package, run the following command:

```bash
npm install my-react-app-hakim10
```

### Usage

The Modal component can be used to display any content in a modal dialog. You can control the visibility of the modal via the `isOpen` prop and close it with the `onClose` callback.

```jsx
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
```

#### Styling

You can customize the modal's appearance using your own CSS or by modifying the default styles provided in Modal.css. The default classes you can override include:

    .modal-overlay: The background overlay behind the modal.
    .modal-content: The modal's content container.
    .close-button: The close button inside the modal.
