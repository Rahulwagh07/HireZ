import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import LoginTemplate from '../components/core/Auth/LoginTemplate';
import { useState } from 'react';
import GoogleSignin from '../components/core/Auth/GoogleSignin';

function Login() {
    const [showLoginTemplate, setShowLoginTemplate] = useState(false);

    const handelOnEmailLogin = () => {
        setShowLoginTemplate(true);
    }

  return (
    <div>
        {
        !showLoginTemplate && 
            <div className=' section_bg  box-shadow flex flex-col mx-auto justify-center items-center p-8  h-[300px] w-[528px]'>
                <h3 className='text-lg font-semibold mb-4 flex flex-start'>Log in to Hire Studio</h3>

                {/* Google Login */}
                <GoogleSignin/>

                {/* Email Login */}
                <button onClick={handelOnEmailLogin}  className='bg-blue-150 text-white py-2 px-4 rounded flex items-center justify-center mb-4 w-[325px] h-[50px]'>
                    <MdOutlineMailOutline className='mr-3' />
                    <p className='font-semibold'>Continue with Email</p>
                </button>

                {/* Don't have an account? Sign up text */}
                <div className='text-center'>
                    <p>
                    Don't have an account? <span className='font-semibold'>Sign up</span>
                    </p>
                </div>
            </div>
        }
        {
            showLoginTemplate && <LoginTemplate/>
        }

    </div>
  )
}

export default Login