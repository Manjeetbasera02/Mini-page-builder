// src/components/Canvas.jsx
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ElementsContext } from '../contexts/ElementsContext';
import Modal from './Modal';
import DraggableElement from './DraggableElement';
import { v4 as uuidv4 } from 'uuid';

const CanvasContainer = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
  border: 1px solid #ccc;
`;

const Canvas = () => {
  const { elements, addElement, updateElement, deleteElement } = useContext(ElementsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const x = e.clientX;
    const y = e.clientY;

    setCurrentElement({ id: uuidv4(), type, x, y, config: {} });
    setIsModalOpen(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSave = (config) => {
    if (currentElement) {
      addElement({ ...currentElement, config });
      setCurrentElement(null);
      setIsModalOpen(false);
    }
  };
  

  const handleUpdate = (id, updatedElement) => {
    updateElement(id, updatedElement);
  };

  const handleDelete = (id) => {
    deleteElement(id);
  };

  return (
    <CanvasContainer onDrop={handleDrop} onDragOver={handleDragOver}>
      {elements.map(el => (
        <DraggableElement key={el.id} element={el} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
      {isModalOpen && <Modal onSave={handleSave} initialData={currentElement} />}
    </CanvasContainer>
  );
};

export default Canvas;
