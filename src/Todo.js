import React, { useState }  from "react";

const Todo = ({ id, remove, edit, todoText }) => {
  const [editTodo, setEditTodo] = useState(todoText);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };
    
  const handleEdit = (e) => {
    setEditTodo(e.target.value)
  }

  const handleUpdate = e => {
    e.preventDefault();
    edit(id, editTodo);
    setIsEditing(false);
  };

  const handleDelete = () => remove(id);

  // had to peek at the solution to get this figured out :(
    // default todo view
    let jsx = (
      <div>        
        <button onClick={handleDelete}>X</button>
        <button onClick={toggleEdit}>Edit</button>
       
        <span>{` - ${todoText}`}</span>                
        
      </div>
    );
  
    // todo view when editing
    if (isEditing) {
      jsx = (
        <div>
          <form onSubmit={handleUpdate}>
            <input type="text" value={editTodo} onChange={handleEdit} />
            <button>Update this toDo</button>
          </form>
        </div>
      );
    }
    
  return jsx;

}

export default Todo;