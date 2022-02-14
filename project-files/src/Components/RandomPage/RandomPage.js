import "./RandomPage.css";
import { useEffect, useState } from "react";
import Comic from "../Comic/Comic";

const RandomPage = () => {
  const [comic, setComic] = useState({});

  useEffect(() => {
    //getRandomComic()
  }, []);

  //API Request
  const getRandomComic = () => {
    const url = "https://xkcd.now.sh?comic=latest";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch(() => console.log("no comics for you Sadge"));
  };


// Rendering our page and passing properties into Comic
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
