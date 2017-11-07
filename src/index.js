import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/skeleton.css';
import './Styles/normalize.css';
import './Styles/App.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bio from './Components/Bio'
import BaseLayout from './Components/BaseLayout';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Tech from './Components/Tech';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/Bio' component={Bio}/>
      <Route path='/Projects' component ={Projects}/>
      <Route path='/Contacts' component={Contact}/>
      <Route path='/Tech' component={Tech}/>
      <Route exact path='/' component={App}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
