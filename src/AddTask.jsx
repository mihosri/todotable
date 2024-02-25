import React, { Component } from 'react'

export class AddTask extends Component {
  initialState = {
    task:""
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target;
   this.setState({[name]:value}) 
  }

  clickSubmit = () => {
    let task = this.state
    this.props.handleSubmit(task)
    this.setState(this.initialState)
  }

  render() {

    return (
      <form>
        <label htmlFor="task">Input your task here 💁‍♀️</label>
        <input type="text" name="task" id="task" onChange={this.handleChange} value={this.state.task}></input>

        <input type="button" onClick={this.clickSubmit} value="Add Task"/>
      </form>
    )
  }
}

export default AddTask
