import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../ducks/store';
import Users from '../pages/users';
// import 'antd/dist/antd.css';

function App({ history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Users} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
