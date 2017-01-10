import React from 'react';

const FilterCompletedTodoItem = ({onChange}) => (
  <div>
    <input type="checkbox" onChange={onChange} /> show active only
  </div>
);

export default FilterCompletedTodoItem;
