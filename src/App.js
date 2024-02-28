import { Component } from "react";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  

  deleteTask = (index) => {
    const { tasks } = this.state

    let filteredData = tasks.filter((task, i) => {
      return i !== index
    })

    this.setState({ tasks: filteredData })
  }

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks,task] })
  }


render() {
    const { tasks } = this.state
    return (
      <Provider store={store}>
        <div>
          <Todo
            deleteTaskFunc={this.deleteTask}
            taskData={tasks}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </Provider>
    )
  }
}

export default App;