import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { order, task, handleDelete } = this.props;

    return (
      <div>
        <li key={task.id}>{order}: {task.text}</li>
        <button onClick={(event) => { handleDelete(event, order); }}>Delete</button>
      </div>
    );
  }
}

export default Task;