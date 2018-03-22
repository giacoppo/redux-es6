
import {render} from 'react-dom';
import React from 'react';
import Users from './containers/users';
import { Provider } from 'react-redux';
import UsersStore from './store';
import { Router, Route, hashHistory } from 'react-router';

render(
  <Provider store={UsersStore} >
    <Router history={hashHistory}>
      <Route path='/users' component={Users} />
    </Router>
  </Provider>,
  document.getElementById('app')
);