import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
    state = {
        advice : ""
    };

    componentDidMount(){
      console.log('Component Mounted');
    }
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
