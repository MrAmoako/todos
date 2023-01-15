import React from 'react';
import useFetch from '../useFetch';
import { useEffect , useState } from 'react';
import './styles.css';
import TodosList from './todoslist';

export default function Todos() {
const { data, isPending, error } = useFetch('http://localhost:8000/todos');

  return (
     <div className='todocontainer'>
      {error && <div>{ error }</div>}
    {isPending && <div><p>Loading...</p></div>}
     {data && <TodosList todos={data}/>}
     <a href="/additem" className='link'><span>+</span>Add Item</a>
      </div>
  )
}
