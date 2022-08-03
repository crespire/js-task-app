import React, { Component } from 'react';
import Task from './Task';

class Overview extends Component {
  render() {
    const { taskList } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task, i) => {
            return <Task key={i+1} order={i+1} task={task} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;