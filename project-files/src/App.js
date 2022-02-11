import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import RandomPage from './Components/RandomPage/RandomPage';
import SearchPage from './Components/SearchPage/SearchPage';
import Bio from './Components/Bio/Bio';


function App() {


  
  return (
    <div className="App">

      <nav>
      <Link to='/'><img src='./images/nav-icon.jpg' alt='a stick figure' /> </Link>
        <ul>
         <Link to='/random'><li>Random Comic!</li></Link>
         <Link to='/search'><li>Search for Comic!</li></Link>
         <Link to='/bio'><li>Bio</li></Link>

        </ul>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/random' element={<RandomPage/>}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/bio' element={<Bio />}></Route>

        </Routes>
      </main>
     
   
    </div>
  );
}

export default App;
