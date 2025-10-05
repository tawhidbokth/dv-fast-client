import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div className='mt-44'>
      <h1 className='text-2xl font-bold '>Login Your Acount </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"  {...register('email', { required: true })} className="input" placeholder="Email" />

           {errors.email?.type === "required" && (
        <p className='text-red-600' role="alert">Email is required</p>
      )}
          


          <label className="label">Password</label>
          <input type="password" {...register('password')} className="input" placeholder="Password" />
               {errors.password?.type === "required" && (
        <p className='text-red-600' role="alert">Password is required</p>
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

export default Login;