import React, { Component } from 'react';
import Task from './Task';

class Overview extends Component {
  render() {
    const { taskList, editTask, editingMode, edit_id, handleDelete, toggleEditMode, handleEditChange, handleEditSubmit } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task, i) => {
            return <Task key={i+1} order={i+1} index={i} task={task} handleDelete={handleDelete} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;