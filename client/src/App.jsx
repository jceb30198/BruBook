import { useState, useEffect } from 'react';
import API from './utils/API';
import './App.css';

function App() {
  // State
  const [brews, setBrews] = useState([]);
  const [abv, setAbv] = useState(0)
  
  // Retrieves All Previous Brews
  useEffect(() => {
    API.getBrews()
    .then(data => setBrews(data))
    .catch(err => console.error(err));
  }, []);

  // Submit Handler
  const handleSubmit = (e) => {
    let [ brewName, OG, FG ] = e.target;

    const data = {
      name: brewName.value,
      originalGrav: Number(OG.value),
      finalGrav: Number(FG.value),
      abv:((Number(OG.value) - Number(FG.value)) * 131.25).toFixed(2)
    };
    
    // Post and Set States
    API.postBrew(data);
    setAbv(data.abv);
    setBrews([...brews, data]);
    
    e.preventDefault();
  }

  return (
    <div>
      <form 
      className="form"
      onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="beer-name">Name of Beer:</label>
          <input 
          id="beer-name" 
          name="Beer Name" 
          type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="original-gravity">Original Gravity (OG):</label>
          <input
          id="original-gravity"
          name="Original Gravity"
          type="number"
          step="0.001" />
        </div>
        <div className="form-group">
          <label htmlFor="final-gravity">Final Gravity (FG):</label>
          <input
          id="final-gravity"
          name="Final Gravity"
          type="number"
          step="0.001" />
        </div>
        <input type="submit" value="Calculate ABV"/>
      </form>
      <div className="display-abv">
        <h3>{ abv }%</h3>
      </div>
      <div className="display-brews">
        <ul>
          {
            !brews ? null : brews.map((brew) => {
              return (
                <li key={ brew._id }>
                  <h3>{ brew.name }</h3>
                  <ul>
                    <li>{ brew.originalGrav }</li>
                    <li>{ brew.finalGrav }</li>
                    <li>{ brew.abv }%</li>
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App;