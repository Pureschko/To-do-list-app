import { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { TodoContext } from './ToDoContext';
 
const ToDoList = () => {
  const { todos, filter } = useContext(TodoContext); // Извлекаем todos и filter из контекста

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;