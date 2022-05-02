import React, { Component } from 'react';
import routes from '../src/routes';
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import './assets/css/materialdesignicons.min.css';

import './assets/scss/themes.scss';
import './assets/css/style.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
