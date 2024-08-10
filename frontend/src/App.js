import logo from './logo.svg';
import './App.css';
import Spinner from './Coponents/Spinner';
import Wheel from './CustomSpinner/Wheel';
import TestWheel from './TestWheel/TestWheel';
import CustomWheel2 from './customwheel2/CustomWheel2';


function App() {
  return (
    <div className="App">
      {/* <Spinner /> */}
      {/* <div className='spinner'>
        <Wheel />
      </div> */}
      {/* <TestWheel /> */}

      <CustomWheel2 />

    </div>
  );
}

export default App;
