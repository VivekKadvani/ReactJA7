import React from 'react'
import Home from './home';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>inside App comp.</h1>
        <Home />
      </div>
    );
  }
}

export default App;
