import React, { useReducer} from 'react';
import AddToDo from "./AddToDo";
import FilterComponent from "./FilterComponent";
import ToDoList from "./ToDoList";

const addToDoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.todo]; 
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ); 
    default:
      return state;
  }
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.filter; 
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(addToDoReducer, []);
  const [filter, filterDispatch] = useReducer(filterReducer, 'all');

  const addTodo = (newTodo) => {
    dispatch({
      type: 'add',
      todo: { id: Date.now(), text: newTodo, completed: false }
    });
  };

  const toggleTodo = id => {
    dispatch({ type: 'toggle', id });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return false;
  });

  return (
    <div className='container mx-auto p-4'>
      <AddToDo addTodo={addTodo} /> 
      <FilterComponent setFilter={filterDispatch} />
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;