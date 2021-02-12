import logo from './logo.svg';
import './App.css';
import rundrect from './RoundedRectangle.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-container">
        <a align="left" href="localhost:3000">
          Project_Name
        </a>
        </div>

        <div className="Top-sites">
      <img src={rundrect} className="Top-sites-box" alt="topsites" />
      Top Sites

      </div>


      </header>

      





      {/*
      <header className="App-header">
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
      </header>
      */}
    </div>
  );
}

export default App;
