import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="main-content">
        <div className="article">
          <img style={{ width: 50, height: 50 }} src={logo} alt=""/>
          <img style={{ width: 50, height: 50 }} src={logo} alt=""/>
        </div>
        <div className="inputArea">
          <input type="text" id="selfInput"/>
        </div>
        <div className="checkBoxArea">
          <input type="checkbox" name="1" value="bike"/>bike
          <input type="checkbox" name="1" value="car"/>car
        </div>
        <div className="selectArea">
          <select>
            <option value="volvo">volvo</option>
            <option value="volvo2">volvo2</option>
            <option value="volvo3">volvo3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
