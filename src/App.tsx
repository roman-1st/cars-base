import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import MapContainer from './components/MapContainer/MapContainer';

function App() {
  return (
    <div className="App">
      <p> Hello !</p>
      <CardList />
      <MapContainer />
    </div>
  );
}

export default App;
