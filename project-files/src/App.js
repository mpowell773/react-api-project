import './App.css';
import {Link, Route, Routes} from 'react-router-dom'


function App() {


  
  return (
    <div className="App">

      <nav>
        <ul>
          <Link to='/'><img src='./images/nav-icon.png' /></Link>
        </ul>
      </nav>
   
    </div>
  );
}

export default App;
