import React, { useState, useEffect } from 'react';
import { API } from '../utils/API'

export default function Brewd() {
  const [brews, setBrews] = useState([]);

  // Get All Brews
  useEffect(() => {
    API.getBrews()
      .then(data => setBrews(data))
      .catch(err => console.error(err));
  }, [])

  // Handle the Brew Delete
  const handoleDelete = (id) => {
    // Deletes from DB
    API.deleteBrew(id);

    // Deletes from State
    setBrews((brews) => brews.filter(brew => brew._id !== id));
  }

  return (
    <main>
      <div className="brewd-container">
        {brews.map((brew) => {
          return (
            <div className="grid-item">
              <h3>{brew.name}</h3>
              <p>Original Gravity: {brew.originalGrav.toFixed(3)}</p>
              <p>Final Gravity: {brew.finalGrav.toFixed(3)}</p>
              <p>ABV: {brew.abv.toFixed(2)}%</p>
              <button 
              className="btn delete"
              onClick={() => handoleDelete(brew._id)}>X</button>
            </div>
          )
        })}
      </div>
    </main>
  )
}