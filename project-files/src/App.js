import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import RandomPage from "./Components/RandomPage/RandomPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Bio from "./Components/Bio/Bio";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [latestComic, setLatestComic] = useState({});

  useEffect(() => {
    getLatestComic();
  }, []);

  //API Request for latest comic. Passes image and title to landing page and number to random page for limit of randomized number
  const getLatestComic = () => {
    const url = "https://xkcd.now.sh?comic=latest";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setLatestComic(data))
      .catch(() => console.log("no comics for you Sadge"));
  };

  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                img={latestComic.img}
                alt={latestComic.alt}
                safe_title={latestComic.safe_title}
              />
            }
          ></Route>
          <Route
            path="/random"
            element={<RandomPage num={latestComic.num} />}
          ></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/bio" element={<Bio />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
