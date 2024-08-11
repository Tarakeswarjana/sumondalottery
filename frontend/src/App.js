import logo from './logo.svg';
import './App.css';
import Spinner from './Coponents/Spinner';
import Wheel from './CustomSpinner/Wheel';
import TestWheel from './TestWheel/TestWheel';
import CustomWheel2 from './customwheel2/CustomWheel2';


const letters = ["A", "B", "C", "D", "G", "M", "N", "O", "P", "I", "W"];
function App() {
  return (
    <div className="App">
      {/* <Spinner /> */}
      {/* <div className='spinner'>
        <Wheel />
      </div> */}
      {/* <TestWheel /> */}

      <CustomWheel2 rotateTime={2} segments={letters} endResult={'i'} />


    </div>
  );
}

export default App;
