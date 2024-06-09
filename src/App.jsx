// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import { ElementsProvider } from './contexts/ElementsContext';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <ElementsProvider>
      <AppContainer>
        <Sidebar />
        <Canvas />
      </AppContainer>
    </ElementsProvider>
  );
};

export default App;
