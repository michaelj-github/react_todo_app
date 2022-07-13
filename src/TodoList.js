import React, { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // add a new todo 
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo]);
  }

  // edit an existing todo
  const edit = (id, editedTodo) => {
    setTodos(todos => 
      todos.map(todo => todo.id === id ? 
        { ...todo, todoText: editedTodo } : todo))
  }

  // remove a todo from the list
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>ToDo List</h1>      
      <div>
      <NewTodoForm addTodo={addTodo} />
        <ul>
        {todos.map( todo  => 
        <Todo 
          id={todo.id}
          key={todo.id}
          todoText={todo.todoText}
          edit={edit}
          remove={remove}          
        />)}
        </ul>
      </div>

    </>
  )
}

export default TodoList;