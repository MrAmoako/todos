import React from 'react';
import { useState } from 'react';
 
export default function AddItem() {
  const [todo, setTodo] = useState('');
  
  const handleSumbit = (e) => {
  e.preventDefault();
  const todos = { todo };

   fetch('http://localhost:8000/todos', {
     method: 'POST',
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(todos)

   }).then(() => {
    console.log('new blog added', todos);
   })
  }


  return (
    <div>
      <form onSubmit={handleSumbit}>
      <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">todo</span>
  <input type="text"
   className="form-control" 
   placeholder="todo" 
   aria-label="Username"
    aria-describedby="addon-wrapping" 
    value={todo}
    onChange={e => setTodo(e.target.value)}
    />
    <button type='submit'>Add Todo</button>
     </div>
     </form>
    </div>
  )
}
