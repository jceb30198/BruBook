import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Nav from '../components/Nav/Nav';
import { API } from '../utils/API';

export default function Home() {
  // State
  const [brews, setBrews] = useState([]);
  const [display, setDisplay] = useState({
    brewName: '',
    abv: 0
  });
  const [editState, setState] = useState({
    state: false,
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
    let [brewName, OG, FG] = e.target;

    // Data Object
    let brewData = {};

    // Check Edit State
    if (editState.state) {
      // Put Data
      brewData = {
        id: editState.id,
        name: brewName.value,
        originalGrav: Number(OG.value),
        finalGrav: Number(FG.value),
        abv: ((Number(OG.value) - Number(FG.value)) * 131.25).toFixed(2)
      }

      // Update Brew in DB
      API.updateBrew(brewData);

      // Update Brew in the Brews State
      setBrews(brews.map((brew) => {
        if (brew._id === editState.id) {
          brew.name = brewData.name;
          brew.originalGrav = brewData.originalGrav;
          brew.finalGrav = brewData.finalGrav;
          brew.abv = brewData.abv;
        }
        return brew;
      }));

      // Change out of Edit State
      setState({
        state: false,
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
    }

    // Change Display State
    setDisplay({
      brewName: brewData.name,
      abv: brewData.abv
    });

    // Reset Values
    brewName.value = '';
    OG.value = '';
    FG.value = '';
    e.preventDefault();
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

  // 5 Minute Timeout to Remove Display
  setTimeout(() => {
    setDisplay({
      brewName: '',
      abv: 0
    })
  }, 300000)

  return (
    <div>
      <Nav />
      <div className="app-grid">

        <main>
          <Form
            handleSubmit={handleSubmit} />

          <div className="display-abv">
            {display.brewName !== '' ? <h3>{display.brewName}: {display.abv}%</h3> : ''}
          </div>
        </main>

        <section className="display-brews">
          <ul>
            {
              brews.map((brew) => {
                return (
                  <li key={brew._id}>
                    <h3>{brew.name}</h3>
                    <p>{brew.originalGrav.toFixed(3)}</p>
                    <p>{brew.finalGrav.toFixed(3)}</p>
                    <p>{brew.abv}%</p>
                    <a
                      className="edit btn"
                      onClick={() => handleEdit(brew)} >Edit</a>
                    <a
                      className="delete btn"
                      onClick={() => handleDelete(brew._id)} >X</a>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    </div>
  )
}