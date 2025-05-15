import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
     const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
    
 }
  return (



    <div>
        <h1>Login</h1>
        <p>Please enter your credentials to log in.</p>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login