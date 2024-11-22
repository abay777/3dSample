import { Environment, OrbitControls, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  { Character } from "./character/Character";



const CharacterCanvas = () => {
  // Load the model
//  const [play, setPlay] = useState(false)
//   const sound = useRef()


//   useEffect(()=>{
//   const playMusic = () => {
//     console.log(sound,'soudn')
//     // console.log("sound: "+ sound);
//     if(play){
//         sound.current.pause();
//     }else{
//         sound.current.play();
//     }
//     setPlay(!play);
// }
//   playMusic()
// },[])
  return (
    <Canvas >
      <Environment preset="park"/>
      <OrbitControls/>
      {/* <PositionalAudio url='intro-music.mp3' distance={10} loop ref={sound} autoplay={false} /> */}
      <Character/>
  
    </Canvas>
 
  );
};

export default CharacterCanvas;
