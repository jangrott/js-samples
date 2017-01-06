import {connect} from 'react-redux';
import AddTodoItem from '../../components/AddTodoItem/AddTodoItem'
import {addTodoItem} from '../../actions/Todo';

const mapDispatchToProps =  ({
  addTodoItem: addTodoItem
});

export default connect(undefined, mapDispatchToProps)(AddTodoItem);
