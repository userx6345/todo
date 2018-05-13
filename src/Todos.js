import React, { Component } from 'react';
import './App.css';

class Todos extends Component {



  render() {

    //deconstuct props

    const {todos} = this.props

    return (
      <div className="App">
        <p>
        {todos}
        </p>
      </div>
    );
  }
}

export default Todos;
