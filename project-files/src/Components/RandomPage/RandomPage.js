import "./RandomPage.css";
import { useEffect, useState } from "react";
import Comic from "../Comic/Comic";

const RandomPage = ({num}) => {
  const [comic, setComic] = useState({});

  useEffect(() => {
    getRandomComic()
  }, []);

  //API Request
  const getRandomComic = () => {
      //prop from latest comic sets max number, if api fetch failed, number is set statically to 2580
      let maxNumber = num ? num : 2580;
      //randomized number
      let randomNumber = Math.floor(Math.random() * maxNumber); 

    const url = `https://xkcd.now.sh?comic=${randomNumber}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch(() => console.log("no comics for you Sadge"));
  };


// Rendering page and passing properties into Comic
  return (
    <div>
      <h3>Random</h3>
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
    </div>
  );
};

export default RandomPage;


//xkcd 1513 :(
