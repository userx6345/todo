import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import * as rdx from './rdx'


class List extends Component {



// *** CREATE NEW PROJECT USING REDUX INSTEAD OF SETSTATE. FIRST FIX INDENT WITH SCRIPT ***

// To bind method:
// this.methodName = this.methodName.bind(this);


  constructor(props){
    super(props)

    // initialise as '[]' and then .push() todos as below

    this.showState = this.showState.bind(this)

    this.state = { data: [
      {
        id: 'todo1'
      },
      {
        id: 'todo5'
      }
    ]
  }

  }


  componentDidMount(){

    console.log(rdx.store.getState())



    this.setState ( { data: [
      {
        id: 'todo6'
      },
      {
        id: 'todo6'
      }
    ]
  },() => {


    console.log('new state', this.state);

    let data = [...this.state.data ]   //creating copy of array
    data[0].id = 'todo4'

    this.setState({data})



   })






// update specific property


  }




  showState() {
  //  store.dispatch(decrementAction)
      console.log(this.props.valueLatest)
  }

  IncrementMethod() {

    return rdx.store.dispatch({
      type: 'CREATE',
      value: 'text8'
    })
  }



  render() {


    console.log(this.props.value[this.props.value.length-1])

    const {onIncrementClick, onDecrementClick} = this.props

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
          {todosComponents}
      </div>
    );
  }
}

export default List;
