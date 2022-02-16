import { useEffect, useState } from "react";
import Comic from "../Comic/Comic";
import Form from "../Form/Form";
import ButtonNav from "../ButtonNav/ButtonNav";
import "./SearchPage.css";

const SearchPage = ({ latestComicNumber }) => {
  const [comic, setComic] = useState({});
  const [formSubmit, setFormSubmit] = useState("");

  //Rerender Comic on each formSubmit
  useEffect(() => {
    getSearchedComic();
  }, [formSubmit]);

  //API Request
  const getSearchedComic = () => {
    const url = `https://xkcd.now.sh?comic=${formSubmit}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch(() => console.error("Fetch failed"));
  };

  //Rendering page and passing properties into Comic. On a side note, Prettier really wanted my ternary on Line 47 to be spread out in a horrically unreadable manner. I refactored and hopefully it's easier to read.
  return (
    <div className="search-page">
      <h2>The Search Page</h2>
      <Form
        setFormSubmit={setFormSubmit}
        latestComicNumber={latestComicNumber}
      />
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
      {comic.title ? (
        <ButtonNav
          formSubmit={formSubmit}
          setFormSubmit={setFormSubmit}
          latestComicNumber={latestComicNumber}
        />
      ) : ("")}
    </div>
  );
};

export default SearchPage;
