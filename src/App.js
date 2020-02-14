import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </Fragment>   
      </Router>
    );
  }
}

export default App;
