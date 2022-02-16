import "./LandingPage.css";
import { useState, useEffect } from "react";
import {useAlert} from 'react-alert'

const LandingPage = ({ img, alt, safe_title }) => {

  const alert = useAlert();

  return (
    <div className="landing-page">
      <h2>XKCD Randomizer/Searcher</h2>
      <p>
        Hello and welcome! Let's totally ignore that there are already search
        and randomize functionalities already built into the XKCD website.{" "}
      </p>
      <p>
        Now that you have suspended your belief, you can use the following tabs
        above to either gander at a random XKCD or you can search by number for
        your favorite XKCD. Otherwise enjoy the latest comic below!
      </p>
      <p>
        This was built with the power of REACT. For the people, and mostly for a
        project.
      </p>

      <h3>{safe_title}</h3>
      <img src={img} alt={alt} title={alt} onClick={() => alert.show(<div className="pop-up">{alt}</div>)} />
    </div>
  );
};

export default LandingPage;
