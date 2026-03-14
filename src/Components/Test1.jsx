import React, { Component } from 'react'

class Test1 extends Component {
    constructor (props){
        super()
        this.state = {
            count: 0,
            group : props.group,
            name : 'Jafar Mohamed'
        }
    };
    
   Add = ()=>{
    this.setState((state)=>{
      return {
        group: state.group + 1
      }
    })
   }

   Minus = ()=>{
    this.setState((state)=>{
      return {
        group : state.group - 1
      }
    })
   }

   changeName = ()=>{
    this.setState((state)=>{
      if(state.count == 1){
        return{
          name : state.name = 'Kadir Mohamed'
        }
      }
      else if(state.count == 2){
        return{
          name : state.name = 'Jafar Mohamed'
        }
      }
    })
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
    )
  }
}
export default Test1
