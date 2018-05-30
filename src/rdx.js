
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { ActionCreators } from 'redux-undo';


const createTodoAction = input => ({
  type: 'CREATE',
  value: input
})

const deleteTodoAction = id => ({
  type: 'DELETE',
  value: id,
  completed: false
})


const reducer = (state = [], action) => {
  if (action.type === 'CREATE') {
    return [
      ...state,
      {
        title: action.value
      }
    ]
  } else if (action.type === 'DELETE'){

    console.log(action.value)

    return state.map((todo,i) =>
        (action.value === i)
          ? {...todo, title: todo.title, completed: true}
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
    onIncrementClick: (input) => dispatch(createTodoAction(input)),
    onDecrementClick: (id) => dispatch(deleteTodoAction(id)),
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())

  }
}


// const reducers = combineReducers({incrementReducer, decrementReducer})

// console.log (reducers)

export const store = createStore(newReducer)
