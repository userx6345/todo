import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import { store } from './rdx'

class List extends Component {


  constructor(props){
    super(props)

    this.showState = this.showState.bind(this)
    this.keyPress = this.keyPress.bind(this)
  //  this.store = this.store.bind(this)
  }



  showState() {

      console.log(this.props.value)
    //  console.log(this.props.valuePast)

  }


  keyPress(e) {

    if(e.keyCode === 13){
      //  console.log('value', e.target.value)
       // put the login here
       this.props.onCreateClick(e.target.value)
       e.target.value = ""
    }
  }



  render() {


//    console.log(this.props.value[this.props.value.length-1])

    const {onCreateClick, onCompleteClick, onUndo, onRedo, onDeleteClick, onEditClick} = this.props

    const todosComponents = this.props.value.map((todo, i) => (

      <Todos
        // key prop added so react doesn't throw warning
        key = {i}
        id = {i}
        todos = {todo.title}
        completed = {todo.completed}
        edit = {todo.edit}
        onCreateClick = {onCreateClick}
        onCompleteClick = {onCompleteClick}
        onDeleteClick = {onDeleteClick}
        onEditClick = {onEditClick}
      />

    ))

    return (
      <div className="App">
          <h2 className="App-title">Todos</h2>
                {/* <div onClick = {this.showState}> <p className="button"> Show State </p></div> */}
                <h3>
                <div onClick = {onUndo}> <p className="button"> Undo </p></div>
                <div onClick = {onRedo}> <p className="button"> Redo </p></div>
                </h3>
                <input style={{
                'font-family': 'Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif',
                'font-size': '32px',
                'background-color': '#333',
                'color': '#00ff00'
              }} type="text" name="title" onKeyDown={this.keyPress} />
          {todosComponents}
      </div>
    );
  }
}

export default List;
