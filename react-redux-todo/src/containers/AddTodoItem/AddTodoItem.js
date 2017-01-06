import React from 'react';
import {connect} from 'react-redux';
import {addTodoItem} from '../../actions/Todo';

const AddTodoItem = ({dispatch}) => {
  let todoItemInput;

  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (todoItemInput.value === '') {
            return;
          }
          dispatch(addTodoItem(todoItemInput.value));
          todoItemInput.value = '';
      }}>
        <input ref={node => todoItemInput = node} type="text" />
        <button type="submit">Add Todo Item</button>
      </form>
    </div>
  )
}

export default connect()(AddTodoItem);
