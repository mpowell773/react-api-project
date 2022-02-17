import { useEffect, useState } from "react";
import Comic from "../Comic/Comic";
import "./RandomPage.css";

const RandomPage = ({ latestComicNumber }) => {
  const [comic, setComic] = useState({});
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState(null);

  //Utilizing a toggle set up in useState for the useEffect to refresh the page with the button
  useEffect(() => {
    getRandomComic();
  }, [toggle]);

  //API Request
  const getRandomComic = () => {
    //prop from latest comic sets max number, if api fetch failed, number is set statically to 2580
    let maxNumber = latestComicNumber ? latestComicNumber : 2580;
    let randomNumber = Math.floor(Math.random() * maxNumber);

    const url = `https://xkcd.now.sh?comic=${randomNumber}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch(() => setError("API has failed. Please try again later"));
  };

  //if API fails, useState updates and error renders
  if (error) {
    return <h1>{error}</h1>;
  }

  //Rendering page and passing properties into Comic
  return (
    <div className="random-page">
      <h2>The Random Page</h2>
      <Comic
        alt={comic.alt}
        day={comic.day}
        img={comic.img}
        link={comic.link}
        month={comic.month}
        news={comic.news}
        num={comic.num}
        safe_title={comic.safe_title}
        title={comic.title}
        transcript={comic.transcript}
        year={comic.year}
      />
      <button onClick={() => setToggle(!toggle)}>Another Comic!</button>
    </div>
  );
};

export default RandomPage;
