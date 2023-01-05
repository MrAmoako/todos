import React from 'react';
import './styles.css';

export default function SideBar() {
  return (
    <ul className="nav flex-column float-start border-end " >
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Inbox</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Today</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Upcoming</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Completed</a>
  </li>
</ul>
  )
}
