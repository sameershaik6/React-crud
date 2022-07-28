import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = (props) => {
    const [search, setSearch] = useState('')

    const { data, deleteHandler } = props;
    return (
        <div className="container">
            <h1 style={{marginTop: 10}}>CRUD APP</h1>
            <input style={{height: '35px',margin: '10px'}} type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value) } /> 
            <Link to="/create-todo">
                <button style= {{marginTop: '-5px'}} className="btn btn-success">Create Users</button>
            </Link>
            <div style={{marginTop: 30}}>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <td>S.no</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter(item => {
                            const firstName = item.firstName.toLowerCase().includes(search.toLowerCase())
                            const lastName = item.lastName.toLowerCase().includes(search.toLowerCase())
                            const email = item.email.toLowerCase().includes(search.toLowerCase())
                            return firstName || lastName || email;
                        }).map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Tooltip title="View" style={{marginTop: '-15px'}}>
                                            <IconButton><Link to={`/view-todo/${item.id}`}><VisibilityIcon /></Link></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit" style={{marginTop: '-15px'}}>
                                            <IconButton><Link to={`/edit-todo/${item.id}`}><EditIcon color="action" /></Link></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete" style={{marginTop: '-15px'}}>
                                            <IconButton onClick={() => deleteHandler(item.id)}><DeleteIcon color="error" /></IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home