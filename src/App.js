import Education from './components/Education';
import Personalinfo from './components/Personalinfo'
import Workexp from './components/Workexp';
import style from './App.css'

function App() {
  return (
    <div className="container">
     <Personalinfo />
     <Education />
     <Workexp />
    </div>
  );
}

export default App;
