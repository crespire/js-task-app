import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      new_task: { text: '', id: uniqid() },
      edit_task: { text: '', id: '' },
      editMode: false,
      editID: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleEditChange(event, taskID) {
    this.setState({
      edit_task: {
        text: event.target.value,
        id: taskID
      }
    })
  }

  handleEditSubmit(event, changeID) {
    event.preventDefault();
    this.setState({
        taskList: this.state.taskList.map(task => task.id === changeID ? this.state.edit_task : task),
        editID: '',
        editMode: false,
        edit_task: {
          text: '',
          id: ''
        }
      })
  }

  toggleEdit(event, taskID) {
    event.preventDefault();
    this.setState({
      editMode: true,
      editID: taskID,
      edit_task: this.state.taskList.find((task) => task.id === taskID)
    })
  }

  handleChange(event) {
    this.setState({
      new_task: { 
        text: event.target.value,
        id: this.state.new_task.id,
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
  };

  handleDelete(event, deleteID) {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter((task) => {return task.id !== deleteID }),
    });
  };

  render() {
    const { taskList, new_task, edit_task, editMode, editID } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>Task: </label>
          <input type="text" id='new-task' value={new_task.text} onChange={this.handleChange} />
          <input type='submit' value='Add!' />
        </form>
        <Overview taskList={taskList} editMode={editMode} editID={editID} editTask={edit_task} handleDelete={this.handleDelete} toggleEdit={this.toggleEdit} handleEditChange={this.handleEditChange} handleEditSubmit={this.handleEditSubmit} />
      </div>
    );
  }
}

export default App;
