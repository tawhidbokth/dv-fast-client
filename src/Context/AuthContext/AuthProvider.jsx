import React, { useEffect, useState } from 'react';
import { Authcontext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const createUser = (email, password) =>{ 
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
  }


  const logout = () => {
  setLoading(true)
  return signOut (auth);
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }

  },[])
  
  const authInfo = {
    user,
    loading,
    logout,
    createUser,
    googleSignIn,
    signIn

  }
  return (
    <Authcontext value={authInfo}>
      {children}
   </Authcontext>
  );
};

export default AuthProvider;