import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider).catch(error => {
      const errorMessage = error.message;
      console.log(error);
      setError(errorMessage);
    });
  };

  // create user  with email and password

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('get user', user);
        setUser(user);
      }
    });
  }, []);

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
