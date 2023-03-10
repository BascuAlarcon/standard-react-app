import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = () => {
    login('Alexander')

    navigate('/items', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button className="btn btn-primary" onClick={ handleLogin }>
          login
        </button>
    </div>
  )
}
