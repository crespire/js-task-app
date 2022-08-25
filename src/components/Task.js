import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { order, task, handleDelete } = this.props;

    return (
      <li>{order}: {task.text} <button onClick={(event) => { handleDelete(event, order); }}>Delete</button></li>
    );
  }
}

export default Task;