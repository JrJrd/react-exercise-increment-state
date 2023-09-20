import React from "react";
import { Component } from "react";
import Heading from "./components/heading.jsx";
import Button from "./components/button.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      customUnit: 0,
    };
  }
  onClick() {
    this.setState({ count: this.state.count + 1 });
  }

  updateCount(unit) {
    this.setState({ count: this.state.count + unit });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading title={`Count is ${this.state.count}`} />
          <Button
            onClick={() => this.updateCount(1)}
          >+1</Button>
          <Button
          onClick={() => this.updateCount(5)}
          >
            +5
          </Button>
          <Button
           onClick={() => this.updateCount(10)}
          >
            +10
          </Button>
          <input type="number" value={this.state.customUnit} onChange={(e) => this.setState({customUnit: e.target.value})}/>
          <Button >INCR</Button>
          <Button
          onClick={() => this.updateCount(-this.state.count)}
          >
            reset
          </Button>
        </header>
      </div>
    );
  }
}
export default App;
