import './App.css';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from "./moon.jpg"
import land from "./land.png"
import cat from "./cat.gif"

function App() {
  const ref = useRef()
  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer 
        offset={0}
        speed={1}
        factor={1.5}
        style={{
          backgroundImage:`url(${moon})`,
          backgroundSize:"cover",
        }}
        />




        <ParallaxLayer 
        offset={2}
        speed={1}
        factor={5}
        style={{
          backgroundImage:`url(${land})`,
          backgroundSize:"cover",
        }}
        />
        <ParallaxLayer
        sticky={{start: 1.0, end: 3.5}}
        style={{textAlign:"center"}}
        >
          <img src={cat} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={()=> ref.current.scrollTo(3)}
        
        >
          <h1>WELCOME TO NATIONAL CHU***YA CORP.</h1>
        </ParallaxLayer>
        <ParallaxLayer
        offset={3.6}
        speed={2}
        onClick={()=> ref.current.scrollTo(656, 500)}
        
        >
          <h1>HI MYSELF MADHAB!!</h1>
        </ParallaxLayer>

        

      </Parallax>
      
    </div>
  );
}

export default App;
