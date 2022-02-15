import "./ButtonNav.css";
import {useAlert} from 'react-alert'


const ButtonNav = ({formSubmit, setFormSubmit, num}) => {
  //copying the number from form submit so that we can more easily manipulate it
  let copiedNumber = formSubmit;
  const alert = useAlert()


  //handles to manipulate the current formSubmit usestate
  const handleMinusOneForm = () => {
    if (formSubmit < 1) {
      alert.show(<div className="alert">{`You realize that we can't go back in time right?`}</div>)
    } else {  
    const difference = copiedNumber - 1;
    console.log('after', difference)
    setFormSubmit(difference);
    }
  }

  const handleAddOneForm = () => {
    const sum = copiedNumber + 1;
    setFormSubmit(sum);
  }

  return (
    <nav className="button-nav">
      <button onClick={() => setFormSubmit(1)}>{'|<'}</button>
      <button onClick={() => handleMinusOneForm()}>{'<'}</button>
      <button onClick={() => handleAddOneForm()}>{'>'}</button>
      <button onClick={() => setFormSubmit(num)}>{'>|'}</button>

    </nav>
  );
};

export default ButtonNav;
