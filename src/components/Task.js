import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <li key={task.id}>{task.text}</li>
    );
  }
}

export default Task;