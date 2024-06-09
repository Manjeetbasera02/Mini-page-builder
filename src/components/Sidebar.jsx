// src/components/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background: #f4f4f4;
  padding: 10px;
`;

const DraggableItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  background: #ddd;
  cursor: pointer;
`;

const Sidebar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
  };

  return (
    <SidebarContainer>
      <DraggableItem draggable onDragStart={(e) => handleDragStart(e, 'Label')}>Label</DraggableItem>
      <DraggableItem draggable onDragStart={(e) => handleDragStart(e, 'Input')}>Input</DraggableItem>
      <DraggableItem draggable onDragStart={(e) => handleDragStart(e, 'Button')}>Button</DraggableItem>
    </SidebarContainer>
  );
};

export default Sidebar;
