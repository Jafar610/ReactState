import React, { Component } from "react";

export default class Test2 extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "Jafar Mohamed",
      age: 25,
      message:3,
      company: props.company,
    };
  }



  changeName = () => {
    this.setState((state) => {
      if (state.name === "Jafar Mohamed") {
        return {
          name: state.name = "Osman Ali",
        };
      } else {
        return {
          name: state.name = "Jafar Mohamed",
        };
      }
    });
  };

  changeMessage = () =>{
    this.setState((state)=>{
        return{
            message : state.message + 1
        }
    })
  }

  componentDidMount(){
    console.log("component did mount");
    document.title = `Message: ${this.state.message}`;
  }

//   componentDidUpdate(){
//     console.log("component did update or hello");
//     document.title = `Message: ${this.state.message}`;
//   }

  componentDidUpdate(prevProps, prevMessage){
    if(prevMessage.message != this.state.message){
        console.log("Message is changed");
        document.title = `Message: ${this.state.message}`;
    }
  }



  render() {
    return (
      <>
        <h1>hello {this.state.name}</h1>
        <h2>My age is {this.state.age}</h2>
        <h2>Message: {this.state.message}</h2>
        <h2>I work on {this.state.company} company</h2>

        <button onClick={this.changeName}>Change Name</button>
        <button onClick ={this.changeMessage}>Change Message</button>
      </>
    );
  }
}
