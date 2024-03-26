import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {id} = useParams();
  const navitage = useNavigate();

  function handleChangeName(event){
    setName(event.target.value);
  }

  function handleChangeEmail(event){
    setEmail(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.put(`http://localhost:8081/update/${id}`, {name, email})
    .then( res => {
      console.log(res);
      navitage('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounds p-3">
        <form onSubmit={handleSubmit}>
          <h1>Update Student</h1>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input 
              type="text" 
              placeholder='Enter Name'
              className='form-control'
              onChange={handleAddName}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input 
              type="text" 
              placeholder='Enter Email'
              className='form-control'
              onChange={handleAddEmail}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent