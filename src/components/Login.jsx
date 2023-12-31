import React, { useRef, useState } from 'react'
import UserAuthobj from '../appwrite/User_service'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import Input from './input';
import Button from './button';
import Logo from './Logo';
const Login = () => {
    const [error,seterror]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const ref=useRef();
    const {handleSubmit,register}=useForm();
    const UserLogIn=async(data)=>{
        seterror("");
        try {
           const session=await UserAuthobj.UserLogIn(data);
           if(session){
            const currUser=await UserAuthobj.GetCurrentUser();
            if(currUser){   
                dispatch(login(currUser))
                // console.log("working");
                navigate("/");
            }
           }
        } catch (error) {
            seterror(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
      <form onSubmit={handleSubmit(UserLogIn)} className='mt-8'>
      <div className='space-y-5'>
        <Input
        label="Email:"
        type="email"
        ref={ref}
        placeholder="Enter Your Email"
        {...register("email",{
            required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
        })}
        />
        <Input
        label="PassWord"
        type="password"
        placeholder="Enter Your PassWord"
        {...register('password',{
            required:true,
        })}
        />
        <Button
        type="submit"
        className="w-full"
        >Sign in</Button>
      </div>
      </form>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        </div>
    </div>
  )
}

export default Login
