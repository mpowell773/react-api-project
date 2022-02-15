import "./Comic.css";
import {useAlert} from 'react-alert'

const Comic = ({
  alt,
  day,
  img,
  link,
  month,
  news,
  num,
  safe_title,
  title,
  transcript,
  year,
}) => {

  const alert = useAlert();

  return (
    <div className="comic-page">
      <h3>{safe_title ? `${safe_title} #${num}` : ``}</h3>
      <img src={img} alt={alt} title={alt} onClick={() => alert.show(<div className="pop-up">{alt}</div>)} />
      <h4>{month ? `Date of Publication: ${month}/${day}/${year}` : ``}</h4>
    </div>
  );
};

export default Comic;
