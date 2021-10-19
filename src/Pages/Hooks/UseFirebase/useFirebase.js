import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // create user  with email and password

  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      setUser(result.user);
      console.log(user);
    });
  };

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then(() => {});
  };

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;

        setUser(user);
        setUserName();
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const signInWithEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;

        setUser(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  // google sign out
  const userSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    name,
    handleName,
    userSignOut,
    handleEmail,
    handlePassword,
    registerUser,
    error,
    signInWithEmailPassword,
    googleSignIn,
  };
};

export default useFirebase;
