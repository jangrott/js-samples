import {combineReducers} from 'redux';

const todoItem = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO_ITEM':
      return {
        id: action.id,
        text: action.text
      };
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
    default:
      return state;
  }
};

export default combineReducers({todoItems});
