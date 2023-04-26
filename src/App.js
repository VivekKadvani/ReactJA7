import React from 'react'
import Home from './home';
import './App.css';
class App extends React.Component {
  state = {
    subject: 'blockchain',
    count: 1
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="App">
        <h1>inside App comp.</h1>
        <Home name={'vivek'} />
        <h1>{this.state.subject}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>Increment</button>
      </div>
    );
  }
}

export default App;
