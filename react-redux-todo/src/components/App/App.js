import React from 'react';
import TodoItems from '../../containers/TodoItems/TodoItems';
import AddTodoItem from '../../containers/AddTodoItem/AddTodoItem';
import FilterCompletedTodoItem from '../../containers/FilterCompletedTodoItem/FilterCompletedTodoItem';

const App = () => (
  <div>
    <AddTodoItem />
    <TodoItems />
    <FilterCompletedTodoItem />
  </div>
);

export default App;
