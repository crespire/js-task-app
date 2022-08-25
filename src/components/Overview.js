import React, { Component } from 'react';
import Task from './Task';
import EditTask from './EditTask';

class Overview extends Component {
  render() {
    const { taskList, editMode, editID, handleDelete, toggleEdit, handleEditChange, handleEditSubmit } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task, i) => {
            if (editMode && editID === task.id) {
              return <EditTask key={task.id} task={task} handleEditChange={handleEditChange} handleEditSubmit={handleEditSubmit}  />
            } else {
              return <Task key={task.id} order={i+1} task={task} handleDelete={handleDelete} toggleEdit={toggleEdit} />;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;