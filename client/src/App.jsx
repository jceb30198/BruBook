import { useEffect } from 'react';
import API from './utils/API';
import './App.css';

function App() {
  
  useEffect(() => {
    API.getBrews();
  }, [])

  return (
    <div>
      <form className="form">
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
          type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="final-gravity">Final Gravity (FG):</label>
          <input
          id="final-gravity"
          name="Final Gravity"
          type="number" />
        </div>
        <input type="submit" value="Calculate ABV"/>
      </form>
      <div className="display-abv">
        <h3>ABV GOES HERE</h3>
      </div>
      <div className="display-brews">
        <ul>
          <li>PREVIOUS BEER DATA GOES HERE</li>
        </ul>
      </div>
    </div>
  )
}

export default App;