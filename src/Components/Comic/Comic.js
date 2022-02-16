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
}) => {
  //defines alert from react-alert
  const alert = useAlert();

  //in the return, there are a few ternaries to hide certain elements until they are populated with comic data
  return (
    <div className="comic-page">
      <h3>{safe_title ? `${safe_title} #${num}` : ``}</h3>
      <img
        src={img}
        alt={alt}
        title={alt}
        onClick={() => alert.show(<div className="pop-up">{alt}</div>)}
      />
      <h4>{month ? `Date of Publication: ${month}/${day}/${year}` : ``}</h4>
    </div>
  );
};

export default Comic;
