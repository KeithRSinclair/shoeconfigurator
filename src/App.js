//import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; //useGLTF


//Css and Images
//import material1 from './images/material1.jpg';
import './index.css';


function App() {
  return (
    <div className="App">
      <h1> &nbsp;Landing Page</h1>
      <Canvas>
        <mesh>
          <boxGeometry attach='geometry' args={[2, 2, 2]} />
          <meshStandardMaterial wireframe />
          <OrbitControls />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
