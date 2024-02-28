import AddTask from './AddTask'
import { useSelector } from 'react-redux'
import { addTask, deleteTask } from './slices/taskSlice'

const { Component } = require('react')

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const { taskData, deleteTaskFunc } = props
  const rows = taskData.map((task, index) => {
    return (      
        <tr key={index}>
          <td>{task.task}</td>
          <td>
            <button onClick={() => deleteTaskFunc(index) }>
              Delete
            </button>
          </td>
        </tr>
    )
  })

  return (<tbody>{rows}</tbody>)
}


class Todo extends Component {

  tasks = useSelector((state) => state.tasks)

  render() {

    return (
      <>
        <AddTask handleSubmit={handleSubmit} />
        <table>
          <TableHead />
          <TableBody taskData={this.tasks} deleteTaskFunc={deleteTaskFunc} />
        </table>
      </>
    )
  }
}

export default Todo
