import React, { lazy } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../ducks/store';
import Users from '../pages/users';

function App({ history, isolate }) {
  lazy(isolate ? import('antd/dist/antd.css') : '');
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Users} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
