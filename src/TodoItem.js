import React from 'react'


function TodoItem (props) {

  return (
    <div className="todo-item">
      <input type="checkbox"
        className="todo-item-checkbox"
        onChange={ () => props.onchange(props.data.id)}
        checked={props.data.done}
      />
      <label className="todo-item-label">
        {props.data.name}
      </label>
      <br/>
      <hr/>
    </div>
  )
}

export default TodoItem
