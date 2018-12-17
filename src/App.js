import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.scss';

import PublicApi from './container/PublicApi.jsx';
import PageNotFound from './container/PageNotFound.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Switch>
          <Route path="/" exact component={PublicApi} />
          <Route component={PageNotFound} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;