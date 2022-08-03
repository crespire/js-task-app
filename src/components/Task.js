import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { order, task } = this.props;

    return (
      <li key={task.id}>{order}: {task.text}</li>
    );
  }
}

export default Task;