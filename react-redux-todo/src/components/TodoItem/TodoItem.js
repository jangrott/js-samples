import React, {PropTypes} from 'react';

const TodoItem = ({text, completed, onClick}) => (
  <li onClick={onClick} style={{textDecoration: completed? 'line-through' : 'none'}}>{text}</li>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;
