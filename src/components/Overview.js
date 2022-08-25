import React, { Component } from 'react';
import Task from './Task';

class Overview extends Component {
  render() {
    const { taskList, handleDelete } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task, i) => {
            return <Task key={task.id} order={i+1} task={task} handleDelete={handleDelete} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;