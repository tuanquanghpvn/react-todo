import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import {} from './TodoThunk';
// Components
import Todo from './Todo';

function mapStateToProps(state) {
  return {
    todoList: state.todo.todoList,
    todoInfo: state.todo.todoInfo,
    loading: state.todo.loading,
    error: state.todo.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
