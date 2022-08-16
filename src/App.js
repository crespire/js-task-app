import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      new_task: { text: '' },
      edit_task: { text: '' },
      editing: false,
      edit_id: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
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

  handleDelete = (event, id) => {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter((task, index) => {return index !== (id)}),
    });
  };

  toggleEditMode = (id) => {
    this.setState({
      editing: this.state.editing === false ? true : false,
      edit_id: id
    })
  }

  handleEditChange = (event) => {
    this.setState({
      edit_task: { 
        text: event.target.value,
        id: this.state.edit_task.id,
      }
    });
  }

  handleEditSubmit = (event, index) => {
    event.preventDefault();
    this.setState({
      taskList: this.state.taskList.splice(index, 1, this.state.edit_task),
      edit_task: {
        text: '',
        id: ''
      },
      editing: false,
      edit_id: ''
    })
  };

  render() {
    const { taskList, new_task, edit_task, editing, edit_id } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>Task: </label>
          <input type="text" id='new-task' value={new_task.text} onChange={this.handleChange} />
          <input type='submit' value='Add!' />
        </form>
        <Overview taskList={taskList} editTask={edit_task} editingMode={editing} edit_id={edit_id} handleDelete={this.handleDelete} toggleEditMode={this.toggleEditMode} handleEditChange={this.handleEditChange} handleEditSubmit={this.handleEditSubmit} />
      </div>
    );
  }
}

export default App;
