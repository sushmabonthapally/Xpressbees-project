import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {orders} from './MockData';
import './Login.css'

const Login  = ()=>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const userInputHandler = (event)=>{
        setUserName(event.target.value)
    }

    const passwordInputHandler = (event)=>{
        setPassword(event.target.value)
    }

    const handleLogin = (event)=>{
        event.preventDefault();
        const matchedOrder = orders.find(val=>val.username === userName && val.password === password)
        if(userName.trim() === '' || password.trim() === ''){
            setErrorMessage('Please enter both userName and Password')
        }
        else if(matchedOrder){
            navigate('./order')
        }
        else{
            setErrorMessage('Invalid userName or Password')
        }

        setUserName('');
        setPassword('')
        
    }


    return(
            <div className = "container">
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
            <div>
            <label htmlFor="userName">Username:</label>
            <input type = "text" id = "userName" className='inputField' value={userName} onChange = {userInputHandler}/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type ="password"  id ="password"  className = 'inputField' value = {password} onChange={passwordInputHandler}/>
            </div>
            <button type="submit" className='loginButton'>Submit</button>
            </form>
            </div>
    )
}

export default Login