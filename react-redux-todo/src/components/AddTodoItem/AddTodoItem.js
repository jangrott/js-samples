import React from 'react';

const AddTodoItem = ({addTodoItem}) => {
  let todoItemInput;

  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (todoItemInput.value === '') {
            return;
          }
          addTodoItem(todoItemInput.value);
          todoItemInput.value = '';
      }}>
        <input ref={node => todoItemInput = node} type="text" />
        <button type="submit">Add Todo Item</button>
      </form>
    </div>
  )
}

export default AddTodoItem;
