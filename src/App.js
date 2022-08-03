import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: new Array,
      new_task: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({new_task: event.target.value});
  }

  handleSubmit(event) {
    console.log('Submitted: ' + this.state.new_task);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>Task: </label>
          <input type="text" id='new-task' value={this.state.new_task} onChange={this.handleChange} required />
          <input type='submit' onClick={this.addTask} value='Add!' />
        </form>
        <Overview taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
