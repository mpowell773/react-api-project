import './Form.css'

const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        getWeather(form);
        
    }
    
    const handleChange = (event) => {
        event.preventDefault();
        setForm(event.target.value);
    }
    
        return (
            <form onSubmit={handleSubmit}>
                <label>Zipcode: </label>
                <input type='text' value={form} onChange={handleChange} />
                <input type='submit' value='submit' />
            </form>
        )
    }

export default Form;

