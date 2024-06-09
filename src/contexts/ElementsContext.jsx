// src/contexts/ElementsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ElementsContext = createContext();

export const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem('elements')) || [];
    setElements(storedElements);
  }, []);

  useEffect(() => {
    localStorage.setItem('elements', JSON.stringify(elements));
  }, [elements]);

  const addElement = (element) => {
    setElements([...elements, element]);
  };

  const updateElement = (id, updatedElement) => {
    setElements(elements.map(el => el.id === id ? updatedElement : el));
  };

  const deleteElement = (id) => {
    setElements(elements.filter(el => el.id !== id));
  };

  return (
    <ElementsContext.Provider value={{ elements, addElement, updateElement, deleteElement }}>
      {children}
    </ElementsContext.Provider>
  );
};
