import AddToDo from "./AddToDo";
import FilterComponent from "./FilterComponent";
import ToDoList from "./ToDoList";
import { useState } from 'react';
import React, { useReducer } from 'react';


function AddToDoReducer (state, action){
  switch (action.type) {
    case 'add':
    return [...state, action.todo];
  }
}

function List (){
  const [list, dispatch]=cartReducer( AddToDoReducer,[])

  function AddToDo(){
    const newList = {}

    dispatch({type: 'add', newList});

    }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={addItem}>Add Toy</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} €
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;



// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('all');
 
//   const toggleTodo = id => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       })
//     );
//   };
 
//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'all') return true;
//     if (filter === 'completed' && todo.completed) return true;
//     if (filter === 'active' && !todo.completed) return true;
//     return false;
//   });
 
//   return (
//     <div className='container mx-auto p-4'>
//       <AddToDo setTodos={setTodos} />
//       <FilterComponent setFilter={setFilter} />
//       <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
//     </div>
//   );
// };
 
// export default App;