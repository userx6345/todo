
import { createStore } from 'redux'



export const createTodoAction = {
  type: 'CREATE',
  value: 'text'
}

export const deleteTodoAction = {
  type: 'DELETE',
  value: 'text2'
}


export function reducer(state = [{text: ''}], action) {
  if (action.type === 'CREATE') {
    return [...state, {text: action.value}]
  } else if (action.type === 'DELETE'){
    return [...state, {text: action.value}]
  } else {
    return state
  }
}

// Map Redux state to component props
export function mapStateToProps(state) {
  return {
    value: state,
    valueLatest: state[state.length-1].text
  }
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(createTodoAction),
    onDecrementClick: () => dispatch(deleteTodoAction)
  }
}


// const reducers = combineReducers({incrementReducer, decrementReducer})

// console.log (reducers)

export const store = createStore(reducer)
