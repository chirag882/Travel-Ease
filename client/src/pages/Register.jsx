import React from 'react'
import { Form } from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {

  const onFinish = (values) => {
    
  }

  return (
    <div className='h-screen d-flex justify-content-center align-items-center'>
      <div className='w-400 card p-3'>
      <h1 className='text-lg'>TravelEase - Register</h1>
      <hr></hr>
      <Form layout='vertical' onFinish={onFinish} >
        <Form.Item label='Name' name='name' >
          <input type='text' /> 
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <input type='text' /> 
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <input type='password' /> 
        </Form.Item>
        <div className='d-flex justify-content-between align-items-center'>
        <Link to="/login">Click Here to Login</Link>
        <button className="secondary-btn" type='submit' >Register</button>
      </div>
      </Form>

      


      </div>
    </div>
  )
}

export default Register