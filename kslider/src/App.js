import Slider from "./Slider";
import Kodava from "./Circle";

import './App.css';
import React,{useState} from 'react';

function generateShapes() {
  return [...Array(50)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 360,
    y: Math.random() * 438,
    weight: (Math.random()*10).toFixed(2),
    isDragging: false,
  }));
}
const INITIAL_STATE = generateShapes();

function App() {
  const [value, setValue] = useState([3, 8]);

  const [circles, setCircles] = useState(INITIAL_STATE);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task 1</h1>
        
        <Kodava circles={circles} setCircles={setCircles}/>
        <br/>
        <Slider value={value} setValue={setValue}/>
      </header>
    </div>
  );
}

export default App;
