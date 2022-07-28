import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTodo = (props) => {
    const navigate = useNavigate();
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "" ,
        email: ""
    });

    const { firstName, lastName, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        if(firstName === '' || lastName === '' || email === '') {
            alert('All fields are mandatory!')
            e.preventDefault();
        } else {
            e.preventDefault();
            props.addHandler(data);
            navigate("/");
        }
    }


    return (
        <div className="container">
            <h2 style={{padding: 10}}>Create Users</h2>
            <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input 
                style={{height: '35px', margin: '5px'}}
                type="text"
                placeholder='First Name'
                name="firstName"
                value={firstName ?? ""}
                onChange={handleChange}
            /><br/>
            <label>Last Name:</label>
            <input 
                style={{height: '35px', margin: '5px'}}
                type="text"
                placeholder='Last Name'
                name="lastName"
                value={lastName ?? ""}
                onChange={handleChange}
            /><br/>
            <label>Email:</label>
            <input 
                style={{height: '35px', marginLeft: '37px' , marginTop: "5px"}}
                type="text"
                placeholder='Email'
                name="email"
                value={email ?? ""}
                onChange={handleChange}
            /><br/>
            <button type="submit" className="btn btn-success" style= {{marginTop: '10px'}}
            >
                Add User
            </button>
            </form>
        </div>
    );
}

export default CreateTodo