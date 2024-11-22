
import './App.css';
import CharacterCanvas from './component/CharcterCanvas';

function App() {
  return (
    <div className="App" style={{width: "100%" ,backgroundImage:"url('/mainbg.png')", boxSizing:'border-box',
      height:" 100vh",
     }}>
      <CharacterCanvas/>

    </div>
  );
}

export default App;
