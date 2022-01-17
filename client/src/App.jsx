function App() {
  return (
    <div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="original-gravity">Original Gravity (OG)</label>
          <input
          id="original-gravity"
          type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="final-gravity">Final Gravity (FG)</label>
          <input
          id="final-gravity"
          type="number" />
        </div>
        <input type="submit" value="Calculate ABV"/>
      </form>
    </div>
  )
}

export default App;