
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { ActionCreators } from 'redux-undo';



const createTodoAction = {
  type: 'CREATE',
  value: 'text'
}

const deleteTodoAction = {
  type: 'DELETE',
  value: 'text2'
}


const reducer = (state = [{text: ''}], action) => {
  if (action.type === 'CREATE') {
    return [...state, {text: action.value}]
  } else if (action.type === 'DELETE'){
    return [...state, {text: action.value}]
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
//    valueLatest: state[state.length-1].text
  }
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(createTodoAction),
    onDecrementClick: () => dispatch(deleteTodoAction),
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())

  }
}


// const reducers = combineReducers({incrementReducer, decrementReducer})

// console.log (reducers)

export const store = createStore(newReducer)
