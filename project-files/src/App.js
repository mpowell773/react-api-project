import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import RandomPage from './Components/RandomPage/RandomPage';
import SearchPage from './Components/SearchPage/SearchPage';
import Bio from './Components/Bio/Bio';
import Navbar from './Components/Navbar/Navbar';


function App() {


  
  return (
    <div className="App">

      <Navbar />

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
