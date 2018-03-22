import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// 4 Main Redux Methods
// createStore
// getState
// dispatch
// subscribe

// REDUCER
function counterReducer(state={ count: 0 }, action) {

  const nextState = { // New state object
    count: state.count
  }
  
  switch (action.type) {
    case 'ADD': //Capitalized action names
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}

// MIDDLEWARE


// STORE
const store = createStore(counterReducer, applyMiddleware(logger));
const counterEl = document.getElementById('counter');

// CALLBACK FUNCTION FOR OUR STORE
function render() {
  const state = store.getState()
  counterEl.innerHTML = state.count.toString()
}

render() //To initialize state
store.subscribe(render) //Gets called anytime an action gets dispatched

// ACTIONS
document.getElementById('add')
  .addEventListener('click', () => {
    store.dispatch({ type: 'ADD' }); //Action set in capitals
  })

document.getElementById('minus')
  .addEventListener('click', () => {
    store.dispatch({ type: 'MINUS' }); //Action set in capitals
  })

document.getElementById('reset')
  .addEventListener('click', () => {
    store.dispatch({ type: 'RESET' }); //Action set in capitals
  })
