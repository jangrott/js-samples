import {connect} from 'react-redux';
import TodoItems from '../../components/TodoItems/TodoItems';
import {markAsCompleted} from '../../actions/Todo'

const getTodoItems = (todoItems, filterCompleted) => (
  filterCompleted? todoItems.filter(todoItem => todoItem.completed === false) : todoItems
);

const mapStateToProps = (state) => ({
  todoItems: getTodoItems(state.todoItems, state.filterCompleted)
});

const mapDispatchToProps =  ({
  onTodoItemClick: markAsCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
