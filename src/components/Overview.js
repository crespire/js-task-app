import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taskList } = this.props;

    return (
      <div>
        <ul>
          {taskList.map((task) => {
            return <li key={task.id}>{task.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;