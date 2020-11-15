import React from 'react'
import TodoList from './TodoList'
import todoData from './todoData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedData = prevState.data.map( item =>
        {
          item.done = (item.id === id) ? !item.done : item.done;
          return item
        }
      )
      return {
        data: updatedData 
      }  
    })
  }

  render () {
    return (
      <div>
        <TodoList data={this.state.data} onchange={this.handleChange}/>
      </div>
    )
  }
}

export default App
