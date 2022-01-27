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
            <li className='dropdown'>
              <a>Home</a>
              <ul>
                <li><a>ABV Calculator</a></li>
              </ul>
            </li>
            <li><a>Brews</a></li>
            <li><a>Log Out</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 