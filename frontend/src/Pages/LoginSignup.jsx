import React from 'react'
const LoginSignup = () => {
    return (
        <div className='loginsignup'>
         <div className="loginsignup-container">
        <h1>Sign Up</h1>
           <div className='loginsignup-fields'>
              <input type='text' placeholder='Your Name'/>
              <input typw='email' placeholder='Email Address'/>
              <input tupw='password' placeholder='Password'/>
           </div>
           <button>continue</button>
           <p className="loginsignup-login">
            Already have an account ? <soan>Logiin here</soan>
            </p>
            <div className='loginsignup-agree'>
                <input type='checkbox' name='' id=''/>
                <p>By continuing, i agree to the term of use & privacy policy</p>
            </div>
         </div>
        </div>
    )
}
export default LoginSignup