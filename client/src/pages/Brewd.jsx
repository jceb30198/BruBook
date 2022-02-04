import React, { useState, useEffect } from 'react';
import { API } from '../utils/API'

export default function Brewd() {
  const [brews, setBrews] = useState([]);

  console.log(brews);
  useEffect(() => {
    API.getBrews()
      .then(data => setBrews(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <main>
      <div className="brewd-container">
        
      </div>
    </main>
  )
}