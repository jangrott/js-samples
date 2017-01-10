import React, {PropTypes} from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoItems = ({todoItems, onTodoItemClick}) => (
  <div>
    <h3>Todo Items ({todoItems.length})</h3>
    <ul>
      {todoItems.map(todoItem =>
        <TodoItem key={todoItem.id} text={todoItem.text} completed={todoItem.completed} onClick={() => onTodoItemClick(todoItem.id)}/>
      )}
    </ul>
  </div>
);

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape(
      {id: PropTypes.number.isRequired, completed: PropTypes.bool.isRequired, text: PropTypes.string.isRequired}
    ).isRequired)
    .isRequired
};

export default TodoItems;
