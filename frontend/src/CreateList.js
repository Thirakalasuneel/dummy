import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateList() {
    const  [values,setValues]=useState({
        title:"",
        description:""
    })
    const navigate = useNavigate();

    function handleSubmit(event)
    {
        event.preventDefault();
        axios.post('http://localhost:9090/list', values)
        .then(res =>
            {
                console.log(res)
                navigate('/list');

            })
            .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">Add Task</h2>
                <div className='mb-2'>
                    <label htmlFor='' className='my-3'>Title</label>
                    <input type="text" placeholder='Enter title' autoComplete='off' 
                     className='form-control' 
                      onChange={e => setValues({...values, title:e.target.value })}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='' className='my-3'>Description</label>
                    <input type="text" placeholder='Enter description' 
                    autoComplete='off'  className='form-control'
                    onChange={e => setValues({...values, description:e.target.value })}/>
                </div>
                <button className='btn btn-success my-3'>Submit</button>
            </form>

        </div>


    </div>
  )
}

export default CreateList