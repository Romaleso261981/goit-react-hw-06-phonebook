import {initialState} from './store'


 
  export function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'addContact':
        return { ...state, value: state.value + 1 }
      case 'deleteContact':
        return { ...state, value: state.value - 1 }
      case 'filterContact':
        return { ...state, value: state.value + action.payload }
      default:
        return state
    }
  }