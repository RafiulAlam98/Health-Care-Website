import React from 'react';
import useAuth from '../Hooks/UseAuth/useAuth';

const Login = () => {
  const { user, googleSignIn, googleSignOut } = useAuth();
  return (
    <div>
      {user.email ? (
        <button onClick={googleSignOut}>Log Out</button>
      ) : (
        <button onClick={googleSignIn}>Google Sign In</button>
      )}
      <p>{user.email}</p>
    </div>
  );
};

export default Login;
