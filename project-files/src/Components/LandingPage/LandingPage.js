import "./LandingPage.css";
import { useState, useEffect } from "react";

const LandingPage = ({img, alt, safe_title}) => {

  return (
    <div>
      <h2>XKCD Randomizer and Searcher</h2>
      <p>
        Hello and welcome! Let's totally ignore that there is already search and
        randomize functionalities already built into the XKCD website.{" "}
      </p>
      <p>
        Now that I have your attention, you can use the following tabs above to
        either gander at a random XKCD or you can search by number for your
        favorite XKCD.
      </p>
      <p>
        This was built with the power of REACT. For the people, and mostly for a
        project.
      </p>

      <h3>{safe_title}</h3>
      <img src={img} alt={alt} title={alt}  />
    </div>

   


  );
};

export default LandingPage;
