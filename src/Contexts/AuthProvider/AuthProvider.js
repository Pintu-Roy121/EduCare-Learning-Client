import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUserWithEamil = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const handleSignInwithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = { user, providerLogin, LogOut, createUserWithEamil, handleUpdateProfile, handleSignInwithEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;