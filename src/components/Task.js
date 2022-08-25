import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { order, task, handleDelete, toggleEdit } = this.props;

    return (
      <li>
        {order}: {task.text}
        <button onClick={(event) => { handleDelete(event, task.id); }}>Delete</button>
        <button onClick={(event) => { toggleEdit(event, task.id)}}>Edit</button>;
      </li>
    );
  }
}

export default Task;