import React from 'react'
import { Link } from 'react-router-dom';
import '../css/login.css'
function Login() {
  return (
    <div className='login'>
        <Link to='/'>
        <img className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
        </Link>
        <div className='login_main'>
            <div className='login_up'>
                <div className='loginm_main'>
                    <div className='loginm_up'>
                            <div className='loginm_up_padd'>
                                <h1>Sign in</h1>
                                <div className='login_email'>

                                </div>
                                <div className='login_button'>
                                    <button>Continue</button>
                                </div>
                                <div className='loginmm_median'>

                                </div>
                                <div className='loginmm_down'></div>
                            </div>
                    </div>
                    <div className='loginm_median'>
                        <div className='line'>New to amazon</div>
                    </div>
                    <div className='loginm_down'>
                        <div className='loginm_but'>
                            <button>Create your account</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='login_down'>

            </div>
        </div>
      
    </div>
  )
}

export default Login
