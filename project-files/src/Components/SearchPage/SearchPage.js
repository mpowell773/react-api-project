import "./SearchPage.css";
import { useEffect, useState } from "react";
import Comic from "../Comic/Comic";
import Form from "../Form/Form";

const SearchPage = () => {
  const [comic, setComic] = useState({});
  const [formSubmit, setFormSubmit] = useState("");

  useEffect(() => {
     getSearchedComic()
  }, [formSubmit]);

  //API Request
  const getSearchedComic = () => {
    const url = `https://xkcd.now.sh?comic=${formSubmit}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch(() => console.log("no comics for you Sadge"));
  };

  console.log(comic);

  // Rendering page and passing properties into Comic
  return (
    <div>
      <h3>Search</h3>
      <Form setFormSubmit={setFormSubmit} />
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

export default SearchPage;
