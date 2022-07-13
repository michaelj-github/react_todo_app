# React Forms Exercises

## Solution Notes

### Setup

    mkdir react_forms
    cd react_forms
    npx create-react-app todo_app
    cd todo_app
    npm start

### Solution Development

- Create components and tests

  - Todo.js, Todo.test.js
  - TodoList.js, TodoList.test.js
  - NewTodoForm.js, NewTodoForm.test.js

- Update App.js and App.test.js

### Testing

- npm test

## Exercise Instructions and Requirements

These exercises will give you more practice working with React forms.

Testing Requirements

Make sure both of these apps have tests. Here are the guidelines for testing:

    Every component needs a smoke + snapshot test.
    Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

Todo App - List, Add, Remove Todos

Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

    App - this component should render the TodoList component
    TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
    NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.
    For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

## Further Study

    It’s time to edit some todos! Each Todo component should also display a button with the text “edit” that when clicked, displays form with the task of the todo as an input and a button to submit the form. When the form is submitted, the task of the text should be updated and the form should be hidden.
