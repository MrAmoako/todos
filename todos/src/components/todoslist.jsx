import React from 'react'

export default function TodosList({todos}) {

  return (
    <div>
         {todos.map((todo) => (
         <div key={todo.id}>
          <p className='p'>{ todo.todo }</p>
         </div>
       ))}
    </div>
  )
}
