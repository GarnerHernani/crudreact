import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navitage = useNavigate();

  function handleAddName(event){
    setName(event.target.value);
  }

  function handleAddEmail(event){
    setEmail(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.post('http://localhost:8081/create', {name, email})
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
          <h1>Add Student</h1>
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
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent