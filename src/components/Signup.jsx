import React,{useState} from 'react'
import authservice from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authslice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function Signup() {
  const navigate=useNavigate();
  const [error, seterror] = useState("");
  const dispatch=useDispatch();
  const {register,handleSubmit}= useForm();

  const create=async(data)=>{
    seterror("");
    try {
      const session= await authservice.createaccount(data)
      if(session){
        const userdata=await authservice.getCurrentUser();
        if(userdata){
          dispatch(authLogin(userdata));
          navigate("/");
        }
      }

    } catch (error) {
      seterror(error.message);
      
    }

  }

  return (
   <div
    className='flex w-full items-center justify-center'
    >
      <div className={`mx-auto w-full max-w-lg bg-blue-50 rounded-xl p-10 border border-blue-200 shadow-sm`}>
      <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-blue-900/70">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-700 transition-all duration-200 hover:text-blue-900 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

      <form onSubmit={handleSubmit(create)}>
        <div className="space-y-5">
          <Input 
          label="Full Name: "
          placeholder="Enter your full nmae"
          {...register("name",{
            required:true,
          })}
          />
          <Input 
          label="Email:"
          placeholder="Enter your email"
          type="email"
          {...register("email",{
              required:true,
              validate: {
                  matchPattern: (value) => 
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
          })}
          />
          <br/>
          <Input 
          label="Password: "
          placeholder="Enter your password"
          type="password"
          {...register("password",{
              required:true,
          })}
          />
          <Button
            type="submit"
            className='w-full'
            >Create account</Button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Signup
