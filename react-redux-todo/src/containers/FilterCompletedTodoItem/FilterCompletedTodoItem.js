import {connect} from 'react-redux';
import FilterCompletedTodoItem from '../../components/FilterCompletedTodoItem/FilterCompletedTodoItem';
import {filterCompleted} from '../../actions/Todo';

const mapDispatchToProps =  ({
  onChange: filterCompleted
});

export default connect(undefined, mapDispatchToProps)(FilterCompletedTodoItem);
