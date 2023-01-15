import React from 'react';
import './styles.css';

export default function SideBar() {
  return (
    <ul className="nav flex-column float-start border-end " >
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Inbox</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Today</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Upcoming</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Completed</a>
  </li>
</ul>
  )
}
