import logo from './logo.svg';
import './App.css';
import Work from './Components/Work'

function App() {

  const btnIsClicked = () =>{
    console.log("Lesego btn is pressed");
  }


  return (
    <div className="App">
      <h1>React responding well!</h1>
      <Work id="submit-btn" label="Lesego" btn={btnIsClicked} />
    </div>
  );
}

export default App;
