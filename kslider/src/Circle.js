import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import Images from "./Image";

export default function Kodava(props) {

  const { circles} = props
    
    
  return (
 

      <Stage width={360} height={438}>
      
          <Layer >
          <Images src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg" x={5} y={-10}/>
   
              {circles.map((circle) => (
                  <>
                      <Circle
                            key={circle.id}
                            id={circle.id}
                            x={circle.x}
                            y={circle.y}
                            
                            radius={7}
                            fill="yellow"
                            opacity={0.5}
                            
                            shadowColor="white"
                            shadowBlur={4}
                            shadowOpacity={0.9}
          />
       
                      </>
        ))}
              </Layer>
        
    </Stage>
 
  );
}
