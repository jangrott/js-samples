import React from 'react';
import TodoItems from '../../containers/TodoItems/TodoItems';
import AddTodoItem from '../../containers/AddTodoItem/AddTodoItem';

const App = () => (
  <div>
    <AddTodoItem />
    <TodoItems />
  </div>
)

export default App;
