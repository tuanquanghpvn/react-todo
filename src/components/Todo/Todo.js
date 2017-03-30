import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoInfo: '',
    };
  }

  onTodoChange = (e) => {
    console.log(e.target.value);
    this.setState({ todoInfo: e.target.value });
  };

  onClick = (e) => {
    const { todoList, todoInfo } = this.state;
    todoList.push(todoInfo);
    this.setState({ todoList: this.state.todoList });
  };

  render() {
    const { todoList, todoInfo } = this.state;
    const todoContent = todoList.map(todo => (
      <li>{todo}</li>
      ));
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3" >
          <div className="form-group">
            <input
              className="form-control"
              value={todoInfo}
              type="text"
              name="todo"
              onChange={this.onTodoChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-danger" onClick={this.onClick}>Add Todo</button>
          </div>
        </div>

        <div className="col-md-6 col-md-offset-3" >
          <ul>
            {todoContent}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Todo);
