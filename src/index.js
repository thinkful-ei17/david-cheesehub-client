import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();