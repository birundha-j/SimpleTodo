/* eslint-disable no-undef */
import React from 'react';
import './login.css';
import Img1 from './image/img1.png';
import Img2 from './image/img2.png';
import Profile from './image/download.svg';


function Login(props) {
    return (
        <div>
            <div className='waveWrapper waveAnimation'>
                <div className='waveWrapperInner bgTop'>
                    <div className="wave waveTop"></div>
                </div>
                <div className='waveWrapperInner bgMiddle'>
                    <div className='wave waveMiddle'></div>
                </div>
            </div >
            <div className='mainContent'>
                <div>
                    <div className='loginContainer'>
                        {/* <h3 className='title'>Login Your Account</h3> */}
                        <div className='profileImg'>
                            <img src={Profile} />
                        </div>
                        <div className='inputContainer'>
                            <input type='text' className='inputBox' placeholder='UserName' />
                        </div>
                        <div className='inputContainer'>
                            <input type='password' className='inputBox' placeholder='Password' />
                        </div>
                        <div className='forgetTitle'>Forget Password?</div>
                        <div className='btnContainer'>
                            <button className='btnShow'>Login</button>
                        </div>
                        <div className='footerContainer'>
                            <div>Create Account?</div>
                            <div>&nbsp; Sign up&nbsp;{'-->'}</div>
                        </div>
                    </div>
                </div>
                <div>
                    {[1, 2].map(() => {
                        return (
                            <div style={{ height: '50vh' }}>
                                <div className='boxView' style={{ position: 'relative', top: '200px' }}></div>
                                <div className='boxView1' style={{ position: 'relative', top: '500px' }}></div>

                            </div>
                        )
                    })}

                    {/* <div style={{ height: '20vh' }}>
                        <div className='boxView1'></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default Login;
