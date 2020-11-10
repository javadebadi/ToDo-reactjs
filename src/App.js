import React from 'react'
import TodoList from './TodoList'
import todoData from './todoData'

function App () {
  return (
    <div>
      <TodoList data={todoData}/>
    </div>
  )
}

export default App
