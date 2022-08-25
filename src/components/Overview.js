import React, { Component } from 'react';
import Task from './Task';

class Overview extends Component {
  render() {
    const { taskList, editTask, editingMode, edit_id, handleDelete, toggleEditMode, handleEditChange, handleEditSubmit } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task, i) => {
            if (editingMode && edit_id === i) {
              // Send TaskEditControl the relevant props
            } else {
              // Send TaskEditControl the relevant props
            }
            return <Task key={i+1} order={i+1} index={i} task={task} handleDelete={handleDelete} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;