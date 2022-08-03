import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      new_task: { text: '' }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      new_task: { 
        text: event.target.value,
        id: this.state.taskList.id,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.concat(this.state.new_task),
      new_task: {
        text: '',
        id: uniqid()
      },
    })
  }

  render() {
    const { taskList, new_task } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>Task: </label>
          <input type="text" id='new-task' value={new_task.text} onChange={this.handleChange} />
          <input type='submit' value='Add!' />
        </form>
        <Overview taskList={taskList} />
      </div>
    );
  }
}

export default App;
