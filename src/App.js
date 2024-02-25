import { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  /**
   *Stored task values in the state so the app will respond based on the state updates
   *
   * @memberof App
   */
  state = {
    tasks: [],
  }

  /**
   *Function to remove the task value and update the state with the rest
   *Utilized Filter method, updated the state with the filtered value
   * @param {*} index - removing index value
   * @memberof App
   */
  deleteTask = (index) => {
    const { tasks } = this.state

    let filteredData = tasks.filter((task, i) => {
      return i !== index
    })

    this.setState({ tasks: filteredData })
  }
/**
 *App is the parent component to Todo
 *Attaching the state data and deleteTask as props to Todo
 * @return {*} 
 * @memberof App
 */
render() {
    const { tasks } = this.state
    return (
      <div>
        <Todo deleteTaskFunc={this.deleteTask} taskData={tasks} />
      </div>
    )
  }
}

export default App;