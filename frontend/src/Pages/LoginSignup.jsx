import React, {useState , useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {
const [mode, setMode] = useState("signup")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [agreed, setagreed] = useState(false)
const [error, setError] = useState("")
const {login, signup} = useContext(ShopContext)
const navigate= useNavigate()

const handleSubmit = () => {
    setError("")
    if (!email || !password || (mode === "signup" && !name)) {
        setError("Please fill in all fields.")
        return
    }
    if (mode === "signup" && !agreed) {
        setError("Plese agree to the terms.")
        return
    }
    const result = mode === "signup"
    ? signup(name,email,password)
    : login(email, password)

    if (result.success) {
        navigate("/")
    } else {
        setError(result.message)
    }
}


    return (
        <div className='loginsignup'>
         <div className="loginsignup-container">
        <h1>{mode === "signup" ? "Sign Up" : "Login"}</h1>
           <div className='loginsignup-fields'>
             {mode === "signup" && <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>} 
              <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
               {error && <p className='loginSignup-error'>{error}</p>}
               <button onClick={handleSubmit}>{mode === "signup" ? "Continue" : "Login"}</button>
           </div>
          
           <p className="loginsignup-login">
            {mode === "signup"
             ? <>Already have an account ? <span onClick={() => { setMode("login"); setError("")}}>Login here</span></>
             : <>Dont have an account ? <span onClick={() => { setMode("signup"); setError("")}}>Signup here</span></>
            }
            </p>
            { mode === "signup" && (
             <div className='loginsignup-agree'>
                <input type='checkbox' checked={agreed} onChange={(e) => setagreed(e.target.checked)} />
                <p>By continuing, i agree to the term of use & privacy policy</p>
            </div>
            )}
            
         </div>
        </div>
    )
}
export default LoginSignup