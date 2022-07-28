import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewTodo = (props) => {
    const {id} = useParams();
    const ViewTodo = props.data.find(item => item.id == id)
    const [data] = useState(ViewTodo)
    
  return (
    <center style={{padding: 10}}>
      <h2>View User</h2>
      <div>
          <div style={{margin: 10}}><div>id: <b>{data.id}</b></div></div>
          <div style={{margin: 10}}><div>First Name: <b>{data.firstName}</b></div></div>
          <div style={{margin: 10}}><div>Last Name: <b>{data.lastName}</b></div></div>
          <div style={{margin: 10}}><div>Email: <b>{data.email}</b></div></div>
          <Link to="/"><button className="btn btn-success mt-2">Back</button></Link>
      </div>
    </center>
  );
}

export default ViewTodo