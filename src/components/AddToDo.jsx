import { useContext, useReducer } from 'react';
import { TodoContext } from './ToDoContext'; 

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.value; 
    case 'reset':
      return ''; 
    default:
      return state;
  }
};

const AddToDo = () => {
  const [newTodo, newToDoDispatch] = useReducer(inputReducer, ''); 
  const { dispatch } = useContext(TodoContext); 

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return; 
    dispatch({ type: 'add', todo: { id: Date.now(), text: newTodo, completed: false } }); 
    newToDoDispatch({ type: 'reset' }); 
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'> 
      <input
        type='text'
        value={newTodo} 
        onChange={e => newToDoDispatch({ type: 'set', value: e.target.value })} 
        placeholder='Add a new to-do'
        className='flex-1 border rounded px-2 py-1 mr-2' 
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add
      </button>
    </form>
  );
};

export default AddToDo;