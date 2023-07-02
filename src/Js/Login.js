import React from 'react'
import { Link } from 'react-router-dom';
import '../css/login.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
                                <form className='login_email'>
                                <h5> Email or mobile number</h5>
                                <div className='input'><input type='text' placeholder='email'></input>
                                </div>
                                </form>
                                <div className='login_button'>
                                <button>Continue</button>
                                </div>
                                <div className='loginmm_median'>
                                    <p>By continuing, you agree to Amazon's <a href='#'>Conditions of Use</a>and <a href='#'>Privacy Notice.</a>
                                    </p>
                                </div>
                                <div className='loginmm_down'>
                                    <ArrowRightIcon/><a href='#'>Need Help?</a>
                                </div>
                            </div>
                    </div>
                    <div className='loginm_median'>
                        <div className='login_line'>New to amazon?</div>
                    </div>
                    <div className='loginm_down'>
                        <div className='loginm_but'>
                            <button>Create your account</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='login_down'>
                <div className='upper'>
                <div className='login1'><a href='#'>Condition of use</a></div>
                <div className='login2'><a href='#'>Privacy Notice</a></div>
                <div className='login3'><a href='#'>Help</a></div>
                </div>
                <div className='lower'>
                © 1996-2023, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
