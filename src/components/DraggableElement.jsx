// src/components/DraggableElement.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ElementWrapper = styled.div`
  position: absolute;
  border: ${({ isSelected }) => (isSelected ? '2px solid red' : 'none')};
  cursor: move;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const DraggableElement = ({ element, onUpdate, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [config, setConfig] = useState(element.config);

  const handleDragEnd = (e) => {
    onUpdate(element.id, { ...element, x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
    setIsEditing(false);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the ElementWrapper
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSelected && e.key === 'Enter') {
        setIsEditing(true);
      } else if (isSelected && e.key === 'Delete') {
        onDelete(element.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSelected, onDelete, element.id]);

  return (
    <ElementWrapper
      style={{ top: element.y, left: element.x }}
      draggable
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      isSelected={isSelected}
    >
      {isEditing ? (
        <FormContainer onClick={handleInputClick}>
          <FormGroup>
            <Label>X:</Label>
            <Input
              type="number"
              value={config.x}
              onChange={(e) => setConfig({ ...config, x: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Y:</Label>
            <Input
              type="number"
              value={config.y}
              onChange={(e) => setConfig({ ...config, y: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Text:</Label>
            <Input
              type="text"
              value={config.text}
              onChange={(e) => setConfig({ ...config, text: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Font Size:</Label>
            <Input
              type="number"
              value={config.fontSize}
              onChange={(e) => setConfig({ ...config, fontSize: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Font Weight:</Label>
            <Input
              type="text"
              value={config.fontWeight}
              onChange={(e) => setConfig({ ...config, fontWeight: e.target.value })}
            />
          </FormGroup>
          <Button onClick={() => {
            onUpdate(element.id, { ...element, config });
            setIsEditing(false);
          }}>Save Changes</Button>
        </FormContainer>
      ) : (
        <div>{config.text}</div>
      )}
    </ElementWrapper>
  );
};

export default DraggableElement;
