
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { ActionCreators } from 'redux-undo';


const createTodoAction = input => ({
  type: 'CREATE',
  value: input
})

const completeTodoAction = id => ({
  type: 'COMPLETE',
  value: id,
  completed: false
})

const deleteTodoAction = id => ({
  type: 'DELETE',
  value: id,
  deleted: false
})

const editTodoAction = (id, input) => ({
  type: 'EDIT',
  value: id,
  text: input,
  edit: false
})


const reducer = (state = [], action) => {
  if (action.type === 'CREATE') {
    return [
      ...state,
      {
        title: action.value
      }
    ]
  } else if (action.type === 'COMPLETE'){
    return state.map((todo,i) =>
        (action.value === i)
          ? {...todo, title: todo.title, completed: !todo.completed}
          : {...todo, title: todo.title}
      )
  } else if (action.type === 'DELETE'){
    return state.filter((todo, i) => i !== action.value)
  } else if (action.type === 'EDIT' && action.text !== undefined){
  return state.map((todo,i) =>
      (action.value === i)
        ? {...todo, title: action.text, edit: !todo.edit}
        : {...todo, title: todo.title}
    )
  } else if (action.type === 'EDIT' && action.text === undefined){
  return state.map((todo,i) =>
      (action.value === i)
        ? {...todo, title: todo.title, edit: !todo.edit}
        : {...todo, title: todo.title}
    )
  } else {
      return state
  }
}

const newReducer = undoable(reducer)


// Map Redux state to component props
export function mapStateToProps(state) {
  return {
    value: state.present,
    valuePast: state.past
//    valueLatest: state[state.length-1].title
  }
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
  return {
    onCreateClick: (input) => dispatch(createTodoAction(input)),
    onCompleteClick: (id) => dispatch(completeTodoAction(id)),
    onDeleteClick: (id) => dispatch(deleteTodoAction(id)),
    onEditClick: (id, input) => dispatch(editTodoAction(id, input)),
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())

  }
}


// const reducers = combineReducers({incrementReducer, decrementReducer})

// console.log (reducers)

export const store = createStore(newReducer)
