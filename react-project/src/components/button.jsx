import { Component } from "react";

class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.onClick = this.onClick.bind(this)
//   }
//   onClick = () => {
  
//     this.setState({ count: this.state.count + 1 });
//   }

// onClick = () => {
  
//      this.setState({ count: this.state.count + 1 });
//        }

//   render() {
//     return <button onClick={this.onClick}>Clicked {this.state.count}</button>;
//   }
// }


      
 render() {
   return <button onClick={this.props.onClick}>{this.props.children} </button>;
 }
}

export default Button;


