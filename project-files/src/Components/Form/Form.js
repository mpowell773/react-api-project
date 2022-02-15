import "./Form.css";
import { useState } from "react";

const Form = ({ setFormSubmit, num }) => {
  const [form, setForm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to prevent user from submitting a fetch request if request is over latest comic number 
    if (form > num) {
      alert(`HEY! The lastest comic is currently #${num}. Don't go pass that number. >:(`)
    } else if (form < 0) {
      alert(`You realize that we can't go back in time right?`)
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
