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
    
  }));
}
const INITIAL_STATE = generateShapes();

function App() {
  const [value, setValue] = useState([0.00, 10.00]);

  const [circles, setCircles] = useState(INITIAL_STATE);

  const data = circles.filter((circle) => {
  return ((parseFloat(circle.weight) >= value[0] 
  && parseFloat(circle.weight) <= value[1])) 
}
    
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task 1</h1>
        
        <Kodava circles={data} setCircles={setCircles}/>
        <br/>
        <Slider value={value} setValue={setValue}/>
      </header>
    </div>
  );
}

export default App;
