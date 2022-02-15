import "./Form.css";
import { useState } from "react";
import {useAlert} from 'react-alert'

const Form = ({ setFormSubmit, num }) => {
  const [form, setForm] = useState("");

  const alert = useAlert()

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to prevent user from submitting a fetch request if request is over latest comic number or if attempting negative numbers.
    if (form > num) {
      alert.show(<div className="alert">{`Hey! The lastest comic is currently #${num}. Don't go past that number. >:(`}</div>)
    } else if (form < 0) {
      alert.show(<div className="alert">{`You realize that we can't go back in time right?`}</div>)
    } else {
      setFormSubmit(form);
    }
    
  };

  const handleChange = (event) => {
    event.preventDefault();
    setForm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Type a number: </label>
      <input type="number" value={form} onChange={handleChange} placeholder={`Latest Comic: ${num}`} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
