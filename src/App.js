import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


//Css and Images
//import material1 from './images/material1.jpg';
import './index.css';
import { WireframeGeometry } from 'three';


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
