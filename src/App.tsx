import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './components/Template'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="options">
        </div>
        <div className="preview">
          <Template />
        </div>

      </header>
    </div>
  );
}

export default App;


