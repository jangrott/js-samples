let nextTodoItemId = 0;

export const addTodoItem = (text) => {
  return {
    type: 'ADD_TODO_ITEM',
    id: ++nextTodoItemId,
    completed: false,
    text
  }
};

export const markAsCompleted = (id) => {
  return {
    type: 'MARK_AS_COMPLETED',
    completed: true,
    id
  }
};
