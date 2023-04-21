import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For User Login 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // For SignOut
    const logOut = () => {
        return signOut(auth);
    }

    // SIgn In With Google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, GoogleProvider)
    }

    // Obeserve auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;