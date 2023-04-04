import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./components/firebase";
export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
    });
    return unsubscribe;
  }, []);

  //   const registerUser = (email, password, name) => {
  //     setLoading(true);
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(() =>
  //         updateProfile(auth.currentUser, {
  //           displayName: name,
  //         })
  //       )
  //       .then((res) => console.log(res))
  //       .catch((err) => setError(err.message))
  //       .finally(() => setLoading(false));
  //   };
  const registerUser = async (email, password, name) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      res.user.displayName = name
    } catch (error) {
      setError(error.message)
    }
  };

  const signInUser = async (email, password) => {
    if (!email && !password) {
      setError('Please fill all fields');
      return;
    }
    else {
      try {
        await signInWithEmailAndPassword(auth,email, password);
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          setError('User not found')
        } else if (error.code === 'auth/wrong-password') {
          setError('Wrong password please try again')
        } else {
          setError(error.message)
        }
      }
    }
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const dataValue = {
    user,
    error,
    setError,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
  };
  return (
    <UserContext.Provider value={dataValue}>{children}</UserContext.Provider>
  );
};
