import React from 'react';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/firebase';
export default function AddItem() {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if(todo === '') {
        return
    }
    const todosCollRef = collection(db, 'todos')
    addDoc(todosCollRef, {todo: todo,})
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error.message)
    })
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">todo</span>
  <input type="text"
   class="form-control" 
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
