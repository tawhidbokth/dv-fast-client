import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';

const PrivetRoutes = ({children}) => {
  const { user, loading } = UseAuth();
  

  if (loading) {   
    return <progress className="progress w-56"></progress> 
  }

  if(!user){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
  }
  
  return children;
};

export default PrivetRoutes;