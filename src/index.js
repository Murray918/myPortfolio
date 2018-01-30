import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/skeleton.css';
import './Styles/normalize.css';
import './Styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App'

ReactDOM.render(<App />
, document.getElementById('root'));
registerServiceWorker();
