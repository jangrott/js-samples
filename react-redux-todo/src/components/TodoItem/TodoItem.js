import React, {PropTypes} from 'react';

const TodoItem = ({text}) => (
  <li>{text}</li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoItem;
