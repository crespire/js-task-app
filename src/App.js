import React, { Component } from 'react';
import Overview from './components/Overview';

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
    this.setState({new_task: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.push(this.state.task),
      new_task: { text: '' },
    })
  }

  render() {
    const { taskList, new_task } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>Task: </label>
          <input type="text" id='new-task' />
          <input type='submit' value='Add!' />
        </form>
        <Overview taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
