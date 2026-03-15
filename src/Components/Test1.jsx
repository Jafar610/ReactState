import React, { Component } from "react";

class Test1 extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      group: props.group,
      name: "Jafar Mohamed",
    };
  }

  Add = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  Minus = () => {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  };

  changeName = () => {
    this.setState((state) => {
      if (state.name === "Jafar Mohamed") {
        return {
          name: (state.name = "Osman Ali"),
        };
      } else {
        return {
          name: (state.name = "Jafar Mohamed"),
        };
      }
    });
  };


  
  componentDidMount() {
    console.log("component did mount");
    // alert('welcome to our website')
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(preProps, prevName) {
    if(prevName.name != this.state.name){
      console.log("Your name is changed");
      // document.title = `Count: ${this.state.count}`;
    }
  }


  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <h2>My name is {this.state.name}</h2>
        <button onClick={this.Add}>Add 1</button>
        <button onClick={this.Minus}>Minus 1</button>
        <button onClick={this.changeName}>Change Name</button>
        <h2>I'm In Group {this.state.group}</h2>
      </>
    );
  }
}
export default Test1;
