import React from 'react';
import logo from './logo.svg';

import {Nav} from './nav/Nav.jsx'
import {Menu} from './menu/menu.jsx'
import {Main} from './main/main'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <div id='not-nav'>
          <Menu/>
          <Main/>
        </div>
      </header>
    </div>
  );
}

export default App;
