import { useState } from "react";
import validation from "./validation";


const Form = ({login}) =>{
    const [userData, setUserData] = useState ({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState ({

    });

    const handleChange = (event) => {
        setErrors(validation ({
            ...userData,
            [event.target.name]: event.target.value
    }))
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
    })
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    };



    return (
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input 
                    value={userData.email} 
                    type="text" 
                    name="email"
                    onChange= {handleChange}/>
                    { errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>) }
                <hr />

                <label htmlFor="password">Password: </label>
                <input 
                    value= {userData.password} 
                    type="password" 
                    name="password"
                    onChange= {handleChange}/>
                    { errors.p1 ? (<p>{errors.p1}</p>) :  (<p>{errors.p2}</p>) }
                <br />
                <button onClick= {handleSubmit} type="submit">SUBMIT</button>
            </form>
        </div>
    )
};

export default Form;