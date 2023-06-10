import React from 'react'
import { Form } from 'antd'
import { Link } from 'react-router-dom'
const Login = () => {

  const onFinish = (values) => {
    
  }

  return (
    <div className='h-screen d-flex justify-content-center align-items-center'>
      <div className='w-400 card p-3'>
      <h1 className='text-lg'>TravelEase - Login</h1>
      <hr></hr>
      <Form layout='vertical' onFinish={onFinish} >
        <Form.Item label='Name' name='name' >
          <input type='text' /> 
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <input type='password' /> 
        </Form.Item>
        <div className='d-flex justify-content-between align-items-center'>
        <Link to="/register">Click Here to Register</Link>
        <button className="secondary-btn" type='submit' >Login</button>
      </div>
      </Form>

      


      </div>
    </div>
  )
}

export default Login