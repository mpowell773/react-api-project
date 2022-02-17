import { useAlert } from "react-alert";
import "./Comic.css";

const Comic = ({
  //props
  alt,
  day,
  img,
  month,
  num,
  safe_title,
  year,
  link,
}) => {
  //defines alert from react-alert
  const alert = useAlert();

  //in the return, there are a few ternaries to hide certain elements until they are populated with comic data. Additionally, Prettier has once again been terribly rude with its formatting of my h5 section.
  return (
    <div className="comic-page">
      <h3>{safe_title ? `${safe_title} #${num}` : ``}</h3>
      <img
        src={img}
        alt={alt}
        title={alt}
        onClick={() => alert.show(<span className="pop-up">{alt}</span>)}
      />
      <h5>
        {link ? (
          <p>
            Need a bigger picture or additional info? Go{" "}
            <a href={link} target="_blank">
              here
            </a>
            .
          </p>
        ) : (``)
         }
      </h5>
      <h4>{month ? `Date of Publication: ${month}/${day}/${year}` : ``}</h4>
    </div>
  );
};

export default Comic;
