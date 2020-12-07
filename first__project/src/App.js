// import logo from './logo.svg';
import './App.css';
import Databinding from './Databinding/Databinding';
import EventBinding from './EventBinding/EventBingding';
import DemoState from './State/DemoState';
import BaiTapChonXe from './State/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Databinding/> */}
      {/* <EventBinding/> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
