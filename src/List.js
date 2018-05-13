import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';

class List extends Component {



// *** CREATE NEW PROJECT USING REDUX INSTEAD OF SETSTATE ***




  constructor(props){
    super(props)

    // initialise as '[]' and then .push() todos as below

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



  render() {


    console.log(this.state)

    const todosComponents = this.state.data.map((todo, i) => (

      <Todos
        // key prop added so react doesn't throw warning
        key = {i}
        todos = {todo.id}
      />

    ))

    return (
      <div className="App">
          <h2 className="App-title">Todos</h2>
          {todosComponents}
      </div>
    );
  }
}

export default List;
