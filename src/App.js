import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Nav} from './nav/Nav.jsx'
import {Menu} from './menu/menu.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Menu/>
      </header>
    </div>
  );
}

export default App;
