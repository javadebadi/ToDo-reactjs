import React from 'react'

function TodoItem () {
  return (
    <div className="todo-item">
      <input type="checkbox" className="todo-item-checkbox"/>
      <label className="todo-item-label">Todo Item </label>
      <br/>
      <hr/>
    </div>
  )
}

export default TodoItem
