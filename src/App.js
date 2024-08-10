import logo from './logo.svg';
import './App.css';
import Spinner from './Coponents/Spinner';
import Wheel from './CustomSpinner/Wheel';
import TestWheel from './TestWheel/TestWheel';
import CustomWheel2 from './customwheel2/CustomWheel2';
import CustomWheel3 from './customWheel3/customWheel3';
import Home from './home/Home';
import SlotMechine from './SlotMechine/DemoSlot';


function App() {
  return (
    <div className="App">
      {/* <Spinner /> */}
      {/* <div className='spinner'>
        <Wheel />
      </div> */}
      {/* <TestWheel /> */}

      {/* <CustomWheel2 /> */}
      {/* <CustomWheel3 stopElement="h" /> */}
      {/* <SlotMechine /> */}
      <Home />

    </div>
  );
}

export default App;
