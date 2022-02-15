import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-page">
      <h2>My Bio</h2>
      <p>
        So you decided to click on the bio link, eh? Well then, here's a little
        snippet about me, the coder Matt, and not Randall who is the creator of
        XKCD.
      </p>
      <p>
        I'm a full-stack web developer with a background in music and theatre. I
        have always been a bit of a nerd when it comes to things technical and
        hence my love for the comic XKCD.{" "}
      </p>
      <p>
        This little web app was built during my time at General Assembly with
        the intent of using both the framework React and fetching data from an
        API.
      </p>
      <p>
        If you would like to see more of my work, click{" "}
        <a href="https://mpowell773.github.io/" target="_blank">
          here
        </a>
        . If you do head that way, thanks for checking out my stuff! I sincerely
        appreciate it.
      </p>
    </div>
  );
};

export default Bio;
