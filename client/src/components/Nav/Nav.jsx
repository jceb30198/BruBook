import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function Nav() {
  return (
    <header>
      <div className='nav-container'>
        <nav id='flex-nav'>
          <div className="logo-container">
          <FontAwesomeIcon icon={ faBeer } size='2x' />
          <h2>BruBook</h2>
          </div>
          <ul>
            <li><NavLink className='link' to='/'>ABV Calc</NavLink></li>
            <li><NavLink className='link' to='/brewd'>BrewD</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 