import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { task, editTask, handleEditChange, handleEditSubmit } = this.props;

    return (
      <li>
        <input type='text' value={editTask.text} onChange={(event) => handleEditChange(event, editTask.id)} />
        <button disabled={true}>Delete</button>
        <button onClick={(event) => handleEditSubmit(event, task.id)}>Change</button>
      </li>
    );
  }
}

export default Task;