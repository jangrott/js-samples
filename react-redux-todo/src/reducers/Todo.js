import {combineReducers} from 'redux';

const todoItem = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'MARK_AS_COMPLETED':
      if (state.id === action.id) {
        state.completed = true;
      }
      return state;
    default:
      return state;
  }
};

const todoItems = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO_ITEM':
      return [
        ...state,
        todoItem(undefined, action)
      ];
    case 'MARK_AS_COMPLETED':
      return state.map(item => todoItem(item, action));
    default:
      return state;
  }
};

const filterCompleted = (state = false, action) => {
  switch(action.type) {
    case 'FILTER_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({todoItems, filterCompleted});
