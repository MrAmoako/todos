import React from 'react';
import {db} from './firebase/firebase'; 
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import './styles.css';

export default function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
     }, [])
 
     useEffect(() => {
         console.log(todos)
      }, [todos])
     
   function getTodos() {
    const todosCollectionRef = collection(db, 'todos');
    getDocs(todosCollectionRef)
    .then(response => {
       const todo = response.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
       }))
       setTodos(todo)
    })
    .catch(error => console.log(error.message))

   }
 

   function deleteTodos(id) {
    const docRef = doc(db, 'todos', id)
    deleteDoc(docRef).then(() => console.log('document deleted '))
    .catch(error => console.log(error.message))

   }
 
  return (
    <div>
      
     <div className='todocontainer'>
      {todos.map(todos => (
        <div id={todos.id}>
            <p><input class="form-check-input" onClick={() => deleteTodos(todos.id)} type="checkbox" value="" id="flexCheckDefault"></input>{todos.data.todo}</p>
            
        </div>
        
      ))}
      <a href="/additem" class="link"><span>+</span>Add Item</a>
      </div>
      
    </div>
  )
}
