import React, { useState } from 'react'
import CutEye from '../../images/CutEye.png'
import Google from '../../images/Google.webp'
import Facebook from '../../images/Facebook.png'
import Lock from '../../images/Lock.png'
import Password from '../../images/Password.png'
import ECom from '../../images/ECom.jpeg'



const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [isJoinIn, setIsJoinIn] = useState(false)
    const [ispassword, setIspassword] = useState(true)
    
    const handleSignIn = () => {
        setIsSignIn(!isSignIn)
        setIsJoinIn(false)
    }
    
    const handleJoinIn = () => {
        setIsJoinIn(!isJoinIn)
        setIsSignIn(false)
    }
    
    const handlepassword = () => {
        setIspassword(!ispassword)
    }
    return (
        <div>
            <div className='w-[100%] h-[680px] lg:h-[620px]  px-4 lg:px-32 pt-8 lg:pt-24  flex flex-col-reverse lg:flex-row'>
                <div className='w-[100%] lg:w-[65%] mt-8'>
                   <img src={ECom} alt="ECom" className='h-[90%] w-[100%] lg:w-[90%] object-cover rounded-tr-3xl rounded-bl-3xl' />
                </div>
                {isSignIn &&
                    <div className='w-[100%] lg:w-[35%] signIn mt-16 lg:mt-0'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer' onClick={handleSignIn}>Sign In</div>
                            <div className='text-gray-400 cursor-pointer' onClick={handleJoinIn}>Join In</div>
                        </div>

                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with google</button>
                                <img className='absolute w-7 left-4 top-1' src={Google} alt="Google" />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with facebook</button>
                                <img className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                                <div className=' poppins-semibold'>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-3'>
                            <input type="text" className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Email' />
                            <div className='relative w-[100%]'>
                                <input type={ispassword ? 'password' : 'text'} className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Password' />
                                <img src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2' onClick={handlepassword} />
                            </div>
                        </div>
                        <div className='w-[100%] my-5'>
                            <div className='w-[100%] flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <input type="checkbox" />
                                    <div className='text-[11px] poppins-regular'>Remember Me</div>
                                </div>
                                <div className='flex'>
                                    <img src={Lock} alt="Lock" className='w-4 h-3.5'/>
                                    <button className='text-[11px] poppins-regular'>Forgot Password?</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <button className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'>Continue</button>
                        </div>
                    </div>
                }


                {isJoinIn &&
                    <div className='w-[100%] lg:w-[35%] JoinIn mt-16 lg:mt-0'>
                        <div className='flex gap-7 text-2xl poppins-semibold'>
                            <div className='text-gray-400 cursor-pointer' onClick={handleSignIn}>Sign In</div>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer'>Join In</div>
                        </div>
                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with google</button>
                                <img className='absolute w-7 left-4 top-1' src={Google} alt="Google" />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1 poppins-semibold'>Continue with facebook</button>
                                <img className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                                <div className=' poppins-semibold'>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-3'>
                            <input type="text" className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Email' />
                            <div className='relative w-[100%]'>
                                <input type={ispassword ? 'password' : 'text'} className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Password' />
                                <img src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2' onClick={handlepassword} />
                            </div>
                        </div>
                        <div className='w-[100%] my-2'>
                            <div className='w-[100%] flex justify-end items-center'>
                                <div className='text-[11px] text-gray-500 poppins-regular'>
                                    Password Strength
                                </div>
                            </div>
                            <div className='w-[100%] my-5 text-center'>
                                <div className='w-[100%] text-[9px] lg:text-[11px] text-gray-500 poppins-regular'>
                                    By continuing, you agree to our <span className='text-black text-[10px] lg:text-[12px]'>Terms of Service</span> and <span className='text-black text-[10px] lg:text-[12px]'>Privacy Policy.</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <button className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'>Agree and Continue</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login;
