import React from 'react';
import './style.css';

export default function Form(props) {
  return (
    <div>
      <form 
      className="form"
      onSubmit={ (e) => props.handleSubmit(e) }>
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
    </div>
  )
}