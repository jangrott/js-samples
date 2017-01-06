let nextTodoItemId = 0;

export const addTodoItem = (text) => {
  return {
    type: 'ADD_TODO_ITEM',
    id: ++nextTodoItemId,
    text
  }
}
