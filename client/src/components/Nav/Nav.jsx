import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function Nav() {
  let params = useParams();

  console.log(params)
  return (
    <header>
      <div className='nav-container'>
        <nav id='flex-nav'>
          <div className="logo-container">
          <FontAwesomeIcon icon={ faBeer } size='2x' />
          <h2>BruBook</h2>
          </div>
          <ul>
            <li><Link className='link' to='/'>ABV Calc</Link></li>
            <li><Link className='link' to='/brewd'>BrewD</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 