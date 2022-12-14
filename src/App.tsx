import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "aframe";

import { Scene, Box, Sphere, Cylinder, Plane, Sky } from "@belivvr/aframe-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Scene>
        <Box position={{ x: -1, y: 0.5, z: -3 }} rotation={{ x: 0, y: 45, z: 0 }} color="#4CC3D9" />
        <Sphere position={{ x: 0, y: 1.25, z: -5 }} radius={1.25} color="#EF2D5E" />
        <Cylinder position={{ x: 1, y: 0.75, z: -3 }} radius={0.5} height={1.5} color="#FFC65D" />
        <Plane position={{ x: 0, y: 0, z: -4 }} rotation={{ x: -90, y: 0, z: 0 }} width={4} height={4} color="#7BC8A4" />
        <Sky color="#ECECEC" />
      </Scene>
    </div>
  );
}

export default App;