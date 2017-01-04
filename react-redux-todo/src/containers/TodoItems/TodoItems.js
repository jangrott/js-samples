import {connect} from 'react-redux';
import TodoItems from '../../components/TodoItems/TodoItems';

const mapStateToProps = (state = {todoItems: [{id: 1, text: 'todo item 1'}, {id: 2, text: 'todo item 2'}]}) => ({
  todoItems: state.todoItems
})

export default connect(mapStateToProps)(TodoItems);
