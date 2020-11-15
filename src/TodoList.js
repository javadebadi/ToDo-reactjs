import React from "react"
import TodoItem from "./TodoItem"

function TodoList (props) {
  const propsComponents = props.data.map(
      (item) => <TodoItem key={item.id} data={item} onchange={props.onchange}/>
  )

  return (
    <div className="todo-list">
      {propsComponents}
    </div>
  )
}

export default TodoList
