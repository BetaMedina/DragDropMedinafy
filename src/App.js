import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Global from './styles/global';
import Header from './components/Header/index';
import Board from './components/Board/index';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Global />
      <Header />
      <Board />
    </DndProvider>
  );
}

export default App;
