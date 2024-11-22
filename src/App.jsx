
import './App.css';
import Monkey from './component/Monkey';

function App() {
  return (
    <div className="App" style={{ backgroundImage:"url('/mainbg.png')", 
    height:'100dvh', backgroundSize: "cover", backgroundRepeat: "no-repeat", }}>
    <Monkey/>

    </div>
  );
}

export default App;
