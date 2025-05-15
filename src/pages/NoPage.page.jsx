import React from 'react'
import { useNavigate } from 'react-router-dom';

function NoPage() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
  return (
    
    <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or return to the homepage.</p>
        <button onClick={handleClick}>Go to Homepage</button>
    
    </div>
  )
}
export default NoPage