import "./Comic.css";

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
  return (
    <div className="comic-page">
      <h3>
        {safe_title
          ? `${safe_title} #${num}`
          : ``}
      </h3>
      <img src={img} alt={alt} title={alt} />
      <h4>
        Date of Publication: {month} {day} {year}
      </h4>
    </div>
  );
};

export default Comic;
