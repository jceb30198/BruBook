import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function Nav() {
  return (
    <header>
      <div className='container'>
        <nav id='flex-nav'>
          <FontAwesomeIcon icon={ faBeer } size='2x' />
          <ul>
            <li>Home</li>
            <li>IBU</li>
            <li>SRM</li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 