import React, { Component } from 'react';
import './App.css';
import * as rdx from './rdx'


class Todos extends Component {



  render() {

    //deconstuct props

    const {todos, id, onIncrementClick, onDecrementClick} = this.props

    return (
      <div className="App">
        <p>
        {todos}
        {id}

        </p>
        <div onClick = {onIncrementClick}> <p className="button"> + </p></div>
        <div onClick = {onDecrementClick}> <p className="button"> - </p></div>
      </div>
    );
  }
}

export default Todos;
