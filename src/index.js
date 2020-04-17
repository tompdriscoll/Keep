import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  function fix_onChange_editable_elements()
  {
    var tags = document.querySelectorAll('[contenteditable=true][onChange]');//(requires FF 3.1+, Safari 3.1+, IE8+)
    for (var i=tags.length-1; i>=0; i--) if (typeof(tags[i].onblur)!='function')
    {
      tags[i].onfocus = function()
      {
        this.data_orig=this.innerHTML;
      };
      tags[i].onblur = function()
      {
        if (this.innerHTML != this.data_orig)
          this.onchange();
        delete this.data_orig;
      };
    }
  }
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
