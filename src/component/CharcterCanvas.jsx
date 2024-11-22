import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Monkey from "./character/Character";


const CharacterCanvas = () => {
  // Load the model


  return (
    <Canvas >
      <Environment preset="studio"/>
      <OrbitControls/>
      <Monkey/>
  
    </Canvas>
 
  );
};

export default CharacterCanvas;
