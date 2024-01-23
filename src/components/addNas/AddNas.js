import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddNas.css';

const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Votre composant principal</h1>

      <button onClick={openModal}>Ouvrir la popup</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <p>Contenu de votre popup ici.</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
};

export default YourComponent;
