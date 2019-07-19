import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Password from './components/Password'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* exact为严格匹配 */}
          <Route exact path="/" component={Password}/>
          <Route path="/Password" component={Password}/>
        </div>
      </Router>
    );
  }
}

export default App;

