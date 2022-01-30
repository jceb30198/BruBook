import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function Nav() {
  return (
    <header>
      <div className='nav-container'>
        <nav id='flex-nav'>
          <FontAwesomeIcon icon={ faBeer } size='2x' />
          <ul>
            <li><a>ABV Calc</a></li>
            <li><a>IBU Calc</a></li>
            <li><a>Brews</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 