import React from 'react';
import Search from './compoents/Search'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"  />
        <h1>React OMDB Search Tool!</h1>
        <Search/>
        
        
      </header>
    </div>
  );
}

export default App;
