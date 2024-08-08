import logo from './logo.svg';
import './App.css';
import Spinner from './Coponents/Spinner';
import Wheel from './CustomSpinner/Wheel';
import TestWheel from './TestWheel/TestWheel';


function App() {
  return (
    <div className="App">
      {/* <Spinner /> */}
      <div className='spinner'>
        <Wheel />
      </div>

      {/* <TestWheel /> */}

    </div>
  );
}

export default App;
