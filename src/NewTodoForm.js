import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
  const [todoText, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ todoText, id: uuid() });
    setTask("");
  }

    return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="toDoText">ToDo </label>
      <input
        id="toDoText"
        type="text"
        name="toDoText"
        value={todoText}
        onChange={handleChange}
      />
      <button>Add a new ToDo</button>
      </div>
    </form>
    </>
  )
}

export default NewTodoForm;