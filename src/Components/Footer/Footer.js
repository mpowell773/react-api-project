import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5>
        Coded by Matt Powell. Comics are{" "}
        <a className="link" href="https://xkcd.com/" target="_blank">
          xkcd
        </a>{" "}
        by Randall Munroe.
      </h5>
    </div>
  );
};

export default Footer;
