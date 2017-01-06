import React, {PropTypes} from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoItems = ({todoItems}) => (
  <div>
    <h3>Todo Items ({todoItems.length})</h3>
    <ul>
      {todoItems.map(todoItem =>
        <TodoItem key={todoItem.id} text={todoItem.text} />
      )}
    </ul>
  </div>
);

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape(
      {id: PropTypes.number.isRequired, text: PropTypes.string.isRequired}
    ).isRequired)
    .isRequired
};

export default TodoItems;
