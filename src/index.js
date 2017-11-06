import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/App.css';
import './Styles/skeleton.css';
import './Styles/normalize.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';





ReactDOM.render(

  <App></App>

  , document.getElementById('root'));
registerServiceWorker();
