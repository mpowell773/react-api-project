import "./ButtonNav.css";
import { useAlert } from "react-alert";

const ButtonNav = ({ formSubmit, setFormSubmit, num }) => {
 
  const alert = useAlert();

  //handles to manipulate the current formSubmit usestate
  const handleMinusOneForm = () => {
    //logic to check if user requests going too far back
    if (formSubmit <= 1) {
      alert.show(
        <div className="alert">{`You are attempting to visit a comic that simply doesn't exist.`}</div>
      );
    } else {
      const difference = formSubmit - 1;
      setFormSubmit(difference);
    }
  };

  const handleAddOneForm = () => {
    if (formSubmit >= num) {
      //logic to check if user requests going past max limit of comics
      alert.show(
        <div className="alert">{`Randall has not yet written this comic, but he normally updates on Monday, Wednesday, and Friday
      !`}</div>
      );
    } else {
      const sum = formSubmit + 1;
      setFormSubmit(sum);
    }
  };

  return (
    <nav className="button-nav">
      <button onClick={() => setFormSubmit(1)}>{"|<"}</button>
      <button onClick={() => handleMinusOneForm()}>{"<"}</button>
      <button onClick={() => handleAddOneForm()}>{">"}</button>
      <button onClick={() => setFormSubmit(num)}>{">|"}</button>
    </nav>
  );
};

export default ButtonNav;
