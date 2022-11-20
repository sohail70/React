import './App.css';
import Employee from './components/Employee'; // ./ means search in the same dir   --> u can use <Employee /> instead of <Employee> </Employee>

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <Employee></Employee>   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
