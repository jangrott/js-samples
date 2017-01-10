import {connect} from 'react-redux';
import TodoItems from '../../components/TodoItems/TodoItems';
import {markAsCompleted} from '../../actions/Todo'

const mapStateToProps = (state) => ({
  todoItems: state.todoItems
});

const mapDispatchToProps =  ({
  onTodoItemClick: markAsCompleted
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
