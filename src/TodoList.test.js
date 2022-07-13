import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(todoList, todoText = "Just do this") {
    const todoTextInput = todoList.getByLabelText("ToDo");
    fireEvent.change(todoTextInput, { target: { value: todoText }});
    const addButton = todoList.getByText("Add a new ToDo");
    fireEvent.click(addButton);
}
  
it('renders without crashing', () => {
    render(<TodoList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

// adds a new todo and displays the current list of todos with edit and remove buttons, clears the input form field
it('should add a new todo', () => {
    const todoList = render(<TodoList />);

    expect(todoList.queryByText('ToDo List')).toBeInTheDocument();
    expect(todoList.queryByText('X')).not.toBeInTheDocument();
    expect(todoList.queryByText('Edit')).not.toBeInTheDocument();

    addTodo(todoList);

    expect(todoList.getByText("- Just do this")).toBeInTheDocument();
    expect(todoList.getByText("Edit")).toBeInTheDocument();
    expect(todoList.getByText("X")).toBeInTheDocument();
    expect(todoList.getByLabelText("ToDo")).toHaveValue("");
});

// add a todo and then remove it
it('should remove a todo', () => {
  const { queryByText, getByText } = render(<TodoList />);
  const addButton = getByText("Add a new ToDo");
  fireEvent.click(addButton);

  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  expect(queryByText('X')).not.toBeInTheDocument();
});

// edit the text of a todo
it('should edit a todo', () => {
    const todoList = render(<TodoList />);
    addTodo(todoList); 
    fireEvent.click(todoList.getByText("Edit"));
    const displayValue = todoList.getByDisplayValue("Just do this");
    fireEvent.change(displayValue, { target: { value: "Do this not that" }});
    fireEvent.click(todoList.getByText("Update this toDo"));    
    expect(todoList.getByText("- Do this not that")).toBeInTheDocument();
    expect(todoList.queryByText("- Just do this")).not.toBeInTheDocument();
});