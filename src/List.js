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

  IncrementMethod(input) {

// Use dispatch via props instead

/*
    return store.dispatch({
      type: 'CREATE',
      value: input.target.value
    })
*/

  }

  keyPress(e) {

    if(e.keyCode == 13){
       console.log('value', e.target.value)
       // put the login here
       this.props.onIncrementClick(e.target.value)
       e.target.value = ""
    }
  }



  render() {


//    console.log(this.props.value[this.props.value.length-1])

    const {onIncrementClick, onDecrementClick, onUndo, onRedo} = this.props

    const todosComponents = this.props.value.map((todo, i) => (

      <Todos
        // key prop added so react doesn't throw warning
        key = {i}
        id = {i}
        todos = {todo.title}
        completed = {todo.completed}
        onIncrementClick = {onIncrementClick}
        onDecrementClick = {onDecrementClick}
        IncrementMethod = {this.IncrementMethod}
      />

    ))

    return (
      <div className="App">
          <h2 className="App-title">Todos</h2>
                <div onClick = {this.showState}> <p className="button"> Show State </p></div>
                <div onClick = {onUndo}> <p className="button"> Undo </p></div>
                <div onClick = {onRedo}> <p className="button"> Redo </p></div>
                <input
                  type="text"
                  name="title"
                  // value={'test'}
                  // onChange={e => onIncrementClick(e.target.value)}
                  // use on key down to get value only on enter
                  onKeyDown={this.keyPress}
                />
          {todosComponents}
      </div>
    );
  }
}

export default List;
