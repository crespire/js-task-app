import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { task, handleEditChange, handleEditSubmit } = this.props;

    return (
      <li>
        <input type='text' value={task.text} onChange={handleEditChange(task.id)} />
        <button disabled={true}>Delete</button>
        <button onClick={handleEditSubmit(task.id)}>Change</button>
      </li>
    );
  }
}

export default Task;