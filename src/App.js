import React from 'react';
import logo from './logo.svg';

import {Nav} from './nav/Nav.jsx'
import {Menu} from './menu/menu.jsx'
import MainContainer from './main/main_container'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <div id='not-nav'>
          <Menu/>
          <MainContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
