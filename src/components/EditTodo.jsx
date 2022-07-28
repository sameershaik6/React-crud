import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const editData = props.data.find(item => item.id == id);
    const [data, setData] = React.useState(editData);

    const { firstName, lastName, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleEdit = () => {
        props.editHandler(id, data);
        navigate('/')
    }
    
    return (
        <div className="container">
            <h2 style={{padding: 10}}>Edit User</h2>
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
                style={{height: '35px', margin: '5px', marginLeft: '37px'}}
                type="text"
                placeholder='Email'
                name="email"
                value={email ?? ""}
                onChange={handleChange}
            /><br/>
            <button className="btn btn-success" style= {{marginTop: '10px'}}
                onClick={() => handleEdit()}
            >
               Update 
            </button>
            <h1>sameer</h1>
        </div>
    );
}

export default EditTodo