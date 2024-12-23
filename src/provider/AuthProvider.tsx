import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User, UserCredential } from "firebase/auth";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

export interface AuthContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    createUserWithEmailAndPass: (email: string, password: string) => Promise<UserCredential>;
    createUserWithGoogle: () => Promise<UserCredential>;
    loginUser: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
}

export const Authcontext = createContext<AuthContextType | null>(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const createUserWithEmailAndPass = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const loginUser = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUserWithEmailAndPass,
        createUserWithGoogle,
        loginUser,
        logout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            if (currentUser) {
                console.log(import.meta.env.VITE_BASE_URL);
                axios.post(`${import.meta.env.VITE_BASE_URL}/authentication`, {
                    email: currentUser.email,
                })
                    .then(data => {
                        if (data?.data) {
                            localStorage.setItem(`access_token`, data.data?.data?.token);
                            setLoading(false);
                        }
                    })
            }else{
                localStorage.removeItem(`access_token`);
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;