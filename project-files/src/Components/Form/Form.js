import "./Form.css";
import { useState } from "react";

const Form = ({ setFormSubmit, num }) => {
  const [form, setForm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmit(form);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setForm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Type a number: </label>
      <input type="number" value={form} onChange={handleChange} placeholder={`Max Comic: ${num}`} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
