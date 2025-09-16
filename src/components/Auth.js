import React, { useContext } from 'react'
import { AuthContext } from './App'
const Auth = () => {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
  return (
    <div>
        <p className='authText'>{isAuthorized ? "You are now authonticated, you can proceed" : "you are not authenticated"}</p>
        <input id='cbox' type='checkbox' onChange={() => setIsAuthorized(!isAuthorized)}/>
        <label htmlFor='cbox'>I'm not a robot</label>
    </div>
  )
}

export default Auth