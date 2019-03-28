import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Link to Home</Link>
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
