import React, { Component } from 'react';
import './App.css';


class Todos extends Component {


  constructor(props){
    super(props)

    this.test = this.test.bind(this)

  }


  test () {

    // console.log(this.props.id)
    this.props.onDecrementClick(this.props.id)
  }


  render() {

    //deconstuct props

    const {todos, id, completed, onIncrementClick, onDecrementClick} = this.props

    return (
      <div onClick = {this.test} className="App"
      style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}>
        <p>
        {todos}
        </p>
      </div>
    );
  }
}

export default Todos;
