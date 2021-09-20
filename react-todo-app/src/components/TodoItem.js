import React from "react"

function TodoItem(props) {
  return (
    
    <li><input type="checkbox" />{props.todo.title}onChange={() => console.log("clicked")}</li>
  )    
}

export default TodoItem