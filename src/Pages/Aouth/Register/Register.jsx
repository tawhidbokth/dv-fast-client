import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { createUser }=UseAuth()
  

    
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password) 
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className='mt-44'>
      <h1 className='text-2xl font-bold '>Create Your Acount </h1>
       <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"  {...register('email', { required: true })} className="input" placeholder="Email" />
          
          {errors.email?.type === "required" && (
        <p role="alert">Email is required</p>
      )}

          <label className="label">Password</label>
          <input type="password" {...register('password', { required: true, minLength:8,})} className="input" placeholder="Password" />

            {errors.password?.type === "required" && (
        <p role="alert">password is required</p>
          )}
               {errors.password?.type === "minLength" && (
        <p role="alert">password must 8 cracter is required</p>
      )}
        
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;