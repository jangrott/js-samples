import {connect} from 'react-redux';
import TodoItems from '../../components/TodoItems/TodoItems';

const mapStateToProps = (state) => ({
  todoItems: state.todoItems
});

export default connect(mapStateToProps)(TodoItems);
