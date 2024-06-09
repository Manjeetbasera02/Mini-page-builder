// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
`;

const Modal = ({ onSave, onDelete, initialData }) => {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSave = () => {
    onSave(data);
  };
  

  const handleDelete = () => {
    onDelete(data);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSave]);

  return (
    <ModalOverlay>
      <ModalContent>
        <FormGroup>
          <Label>X:</Label>
          <Input type="number" name="x" value={data.x} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Y:</Label>
          <Input type="number" name="y" value={data.y} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Text:</Label>
          <Input type="text" name="text" value={data.text} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Font Size:</Label>
          <Input type="number" name="fontSize" value={data.fontSize} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Font Weight:</Label>
          <Input type="text" name="fontWeight" value={data.fontWeight} onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSave}>Save Changes</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
