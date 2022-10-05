import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Users from '../pages/users';
// import 'antd/dist/antd.css';

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
