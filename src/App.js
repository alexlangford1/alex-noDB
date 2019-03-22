import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Welcome />
        </div>
      </div>
    );
  }
}

export default App;
