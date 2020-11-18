import React from 'react'


function TodoItem (props) {

  let styleDone = {
    color: "rgba(0,0,0,0.3)",
    textDecoration: "line-through"
  }

  let styleNotDone = {
    color: "rgba(30,180,50,1)"
  }

  let style = props.data.done ? styleDone : styleNotDone

  return (
    <div className="todo-item">
      <input type="checkbox"
        className="todo-item-checkbox"
        onChange={ () => props.onchange(props.data.id)}
        checked={props.data.done}
      />
      <label className="todo-item-label" style={style}>
        {props.data.name}
      </label>
      <br/>
      <hr/>
    </div>
  )
}

export default TodoItem
