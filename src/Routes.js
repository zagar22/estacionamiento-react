import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/login/Login';
import SignUp from './components/authentication/SignUp/SignUp';
import Main from './components/common/main/main';
import Estacione from './components/common/estacione/Estacione';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={SignUp} />
        <Route path="/estacione" component={Estacione} />
      </Switch>
    </Router>
  );
};

export default Routes;
