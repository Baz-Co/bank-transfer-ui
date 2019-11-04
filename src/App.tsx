import React from 'react';
import { RootRouter } from './routes';
import './App.css'; // TODO: Modularize css

const App: React.FC = () => {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
