import React, { useState, useEffect } from 'react';
import { API } from '../utils/API';

function Home() {
  // State
  const [brews, setBrews] = useState([]);
  const [abv, setAbv] = useState(0);
  const [editState, setState] = useState({
    state:false,
    id: '' 
  });
  
  // Retrieves All Previous Brews
  useEffect(() => {
    API.getBrews()
      .then(data => setBrews(data))
      .catch(err => console.error(err));
  }, []);

  // Submit Handler
  const handleSubmit = (e) => {
    // Global Function Variables
    let [ brewName, OG, FG ] = e.target;
    
    // Data Object
    let brewData = {};

    if(editState.state) {
      // Put Data
      brewData = {
        id: editState.id,
        name: brewName.value,
        originalGrav: Number(OG.value).toFixed(3),
        finalGrav: Number(FG.value).toFixed(3),
        abv: ((Number(OG.value) - Number(FG.value)) * 131.25).toFixed(2)
      }

      // Update Brew in DB
      API.updateBrew(brewData);

      // Change out of Edit State
      setState({
        state: true,
        id: ''
      });
    } 
    else {
      // Post Data
      brewData = {
        name: brewName.value,
        originalGrav: Number(OG.value).toFixed(3),
        finalGrav: Number(FG.value).toFixed(3),
        abv: ((Number(OG.value) - Number(FG.value)) * 131.25).toFixed(2)
      }

      // Post Brew to DB
      API.postBrew(brewData)
        .then(data => setBrews([...brews, data]))
        .catch(err => console.error(err));

      // Change State Abv
      setAbv(brewData.abv);
      
      // Reset Values
      OG.value = '';
      FG.value = '';
      e.preventDefault();
    }
  }

  // Edit Old Brew
  const handleEdit = (oldBrew) => {
    // Change Values for Edit State
    document.querySelector('#beer-name').value = oldBrew.name;
    document.querySelector('#original-gravity').value = oldBrew.originalGrav.toFixed(3);
    document.querySelector('#final-gravity').value = oldBrew.finalGrav.toFixed(3);

    // Change to Edit State and Send Edit Data
    setState({
      state: true,
      id: oldBrew._id
    });
  }

  // Delete Previous Brew
  const handleDelete = (id) => {
    // Deletes from DB
    API.deleteBrew(id);

    // Filters out of State
    setBrews((brews) => brews.filter(brew => brew._id !== id));
  }

  return (
    <div>
      <form 
      className="form"
      onSubmit={ (e) => handleSubmit(e) }>
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
                    <li>{ brew.originalGrav.toFixed(3) }</li>
                    <li>{ brew.finalGrav.toFixed(3) }</li>
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