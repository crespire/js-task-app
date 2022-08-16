import React, { Component } from 'react';

class EditTask extends Component {
  render() {
    const { edit_task, handleEditSubmit, handleEditChange } = this.props;

    return (
      <li>
        <form onSubmit={handleEditSubmit}>
          <label htmlFor="edit">Task:</label>
          <input type="text" id='edit-task' value={edit_task.text} onChange={handleEditChange} />
          <input type='submit' value='Update' />
        </form>
      </li>
    );
  }
}

export default EditTask;