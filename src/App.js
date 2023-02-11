import './App.css';
import WelcomeName from './components/WelcomeName';
import Wheel from './components/Wheel';

function App() {
  return (
    <div className="parent">

      <div className="components">  
        <WelcomeName name={''}/> 
        <Wheel/>

      </div>

    </div>
  );
}

export default App;

