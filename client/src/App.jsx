import { useState, useEffect } from 'react';
import API from './utils/API';
import './App.css';

function App() {
  // State
  const [brews, setBrews] = useState([]);
  const [abv, setAbv] = useState(0);
  
  // Retrieves All Previous Brews
  useEffect(() => {
    API.getBrews()
      .then(data => setBrews(data))
      .catch(err => console.error(err));
  }, []);

  // Submit Handler
  const handleSubmit = (e) => {
    let [ brewName, OG, FG ] = e.target;

    const brewData = {
      name: brewName.value,
      originalGrav: Number(OG.value).toFixed(3),
      finalGrav: Number(FG.value).toFixed(3),
      abv: ((Number(OG.value) - Number(FG.value)) * 131.25).toFixed(2)
    };
    
    // Post and Set States
    setAbv(brewData.abv);
    API.postBrew(brewData)
      .then(data => setBrews([...brews, data]));

    // Reset Values
    brewName.value = '';
    OG.value = '';
    FG.value = '';
    e.preventDefault();
  }

  // Edit Old Brew
  const handleEdit = (oldBrew) => {
    console.log(oldBrew);
  }

  // Delete Previous Brew
  const handleDelete = (id) => {
    // Deletes from DB
    API.deleteBrew(id);
    console.log(id);

    // Filters out of State
    setBrews((brews) => brews.filter(brew => brew._id !== id));
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
          type="text"
          placeholder="Experimental Lager" />
        </div>
        <div className="form-group">
          <label htmlFor="original-gravity">Original Gravity (OG):</label>
          <input
          id="original-gravity"
          name="Original Gravity"
          type="number"
          placeholder="1.050"
          step="0.001" />
        </div>
        <div className="form-group">
          <label htmlFor="final-gravity">Final Gravity (FG):</label>
          <input
          id="final-gravity"
          name="Final Gravity"
          type="number"
          placeholder="1.005"
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
            brews.map((brew) => {
              return (
                <li key={ brew._id }>
                  <h3>{ brew.name }</h3>
                  <ul>
                    <li>{ brew.originalGrav }</li>
                    <li>{ brew.finalGrav }</li>
                    <li>{ brew.abv }%</li>
                  </ul>
                  <h3
                  className="edit"
                  onClick={ () => handleEdit(brew) } >Edit</h3>
                  <h3 
                  className="delete"
                  onClick={ () => handleDelete(brew._id) } >X</h3>
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