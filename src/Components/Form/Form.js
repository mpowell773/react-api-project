import { useState } from "react";
import { useAlert } from "react-alert";
import "./Form.css";

const Form = ({ setFormSubmit, latestComicNumber }) => {
  const [form, setForm] = useState("");

  //Utilizing alert from react-alert
  const alert = useAlert();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Logic to prevent user from submitting a fetch request if request is over latest comic number or if attempting negative numbers.
    if (form > latestComicNumber) {
      alert.show(
        <span className="alert">{`Hey! The lastest comic is currently #${latestComicNumber}. Don't go past that number. >:(`}</span>
      );
    } else if (form < 0) {
      alert.show(
        <span className="alert">{`You realize that we can't go back in time right?`}</span>
      );
    } else if (form === 0) {
      alert.show(
        <span className="alert">{`This isn't a javascript array. The comic series starts at 1.`}</span>
      );
    } else {
      setFormSubmit(form);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    //Very interesting bugs were happening, since the value being passed in was a string
    setForm(parseInt(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Type a number: </label>
      <input
        type="number"
        value={form}
        onChange={handleChange}
        placeholder={`Latest Comic: ${latestComicNumber}`}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
