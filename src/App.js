import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <img src={logo} className="App-logo" alt="logo"></img>
      <h1>Welcome to SongBook</h1>
      <h2>Type in your search terms:</h2>
      <form>
        <input type='text' id="song_name" name='song_name' placeholder='Song' />
        <input type='text' id="artist_name" name='artist_name' placeholder='Artist' /><br />
        <input type='submit' value='Search' />
      </form>
    </React.Fragment>
  );
}

export default App;
