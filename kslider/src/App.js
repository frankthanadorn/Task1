import Slider from "./Slider";
import Kodava from "./Circle";
import './App.css';
import React,{useState} from 'react';
import styled from "styled-components";

const Button = styled.button`
background-color: #3f51b5;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
 
`;


function App() {
  const [value, setValue] = useState([0.00, 10.00]);

  const [circles, setCircles] = useState([]);
 function generateShapes() {
    return setCircles([...Array(50)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * 360,
      y: Math.random() * 438,
      weight: (Math.random()*10).toFixed(2),
  
    })));
  }
  
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
        <Button onClick={generateShapes}>Reset</Button>
        <Slider value={value} setValue={setValue}/>
        
      </header>
    </div>
  );
}

export default App;
