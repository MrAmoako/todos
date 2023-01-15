import React from 'react';
import './styles.css';
import Todos from './todos';

export default function Home() {
  return (
    <div>
        <p className="p fs-1">Index</p>
       <Todos />
    </div>
  )
}
