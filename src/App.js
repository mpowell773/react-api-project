import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import RandomPage from "./Components/RandomPage/RandomPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import BioPage from "./Components/BioPage/BioPage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "./App.css";


function App() {
  const [latestComic, setLatestComic] = useState({});

  useEffect(() => {
    getLatestComic();
  }, []);

  //API Request for latest comic. Passes image and title to landing page and the comic's number to RandomPage and SearchPage to help with control flow
  const getLatestComic = () => {
    const url = "https://xkcd.now.sh?comic=latest";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setLatestComic(data))
      .catch(() => console.log("no comics for you Sadge"));
  };

  return (
    <div className="App">
      <div className="content-wrap">
        <NavBar />

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
            <Route path="/search" element={<SearchPage num={latestComic.num} />}></Route>
            <Route path="/bio" element={<BioPage />}></Route>
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
