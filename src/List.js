import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import { store } from './rdx'

class List extends Component {


  constructor(props){
    super(props)

    this.showState = this.showState.bind(this)
  //  this.store = this.store.bind(this)
  }



  showState() {

      console.log(this.props.value)
      console.log(this.props.valuePast)

  }

  IncrementMethod() {

    return store.dispatch({
      type: 'CREATE',
      value: 'text8'
    })
  }



  render() {


//    console.log(this.props.value[this.props.value.length-1])

    const {onIncrementClick, onDecrementClick, onUndo, onRedo} = this.props

    const todosComponents = this.props.value.map((todo, i) => (

      <Todos
        // key prop added so react doesn't throw warning
        key = {i}
        id = {i}
        todos = {todo.text}
        onIncrementClick = {onIncrementClick}
        onDecrementClick = {onDecrementClick}
        IncrementMethod = {this.IncrementMethod}
      />

    ))

    return (
      <div className="App">
          <h2 className="App-title">Todos</h2>
          <div onClick = {this.IncrementMethod}> <p className="button"> + </p></div>
          <div onClick = {onDecrementClick}> <p className="button"> - </p></div>
                <div onClick = {this.showState}> <p className="button"> Show State </p></div>
                <div onClick = {onUndo}> <p className="button"> Undo </p></div>
                <div onClick = {onRedo}> <p className="button"> Redo </p></div>
          {todosComponents}
      </div>
    );
  }
}

export default List;
