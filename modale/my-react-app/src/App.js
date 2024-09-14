import React, { useState } from 'react';
import Modal from './Modal';
import "./App.css"

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
      {/* <div class="header">
  <h1>React Modal</h1>
  <p class="sub">The simplest modal you ever did see. convert from Jquery to React</p>
  <a class="github-button" href="https://github.com/kylefox/jquery-modal" data-size="large" data-show-count="true" aria-label="Star kylefox/jquery-modal on GitHub">Star</a>

  <ul>
    <li>Automatic binding using HTML semantics</li>
    <li>No images &amp; light-weight <small>(about 1k minified)</small></li>
    <li>Simple markup makes it easy to style</li>
    <li>Close with click or ESC key</li>
    <li>Built by <a href="https://twitter.com/kylefox">@kylefox</a> convert by Hakim</li>
  </ul>
</div> */}


<h2><span>#</span>Example 1: Open &amp; Close with links</h2>

      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>My Modal Content</h1>
        <p>Thanks for clicking.  That felt good.  <br />Click on <span>Close</span>, click the overlay, or press ESC</p>
      </Modal>
    </div>
  );
};

export default App;


