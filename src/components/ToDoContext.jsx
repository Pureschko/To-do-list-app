import React, { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const todoReducer = (state, action) => {
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

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [filter, filterDispatch] = useReducer(filterReducer, 'all');

  return (
    <TodoContext.Provider value={{ todos, dispatch, filter, filterDispatch }}>
      {children} 
    </TodoContext.Provider>
  );
};