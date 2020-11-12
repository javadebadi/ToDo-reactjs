import React from 'react'
import TodoList from './TodoList'
import todoData from './todoData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: todoData
    }
  }

  render () {
    return (
      <div>
        <TodoList data={this.state.data}/>
      </div>
    )
  }
}

export default App
