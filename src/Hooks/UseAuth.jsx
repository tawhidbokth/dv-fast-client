import React, { use } from 'react';
import { Authcontext } from '../Context/AuthContext/AuthContext';

const UseAuth = () => {
  const authInfo = use(Authcontext)
  return authInfo;
};

export default UseAuth;