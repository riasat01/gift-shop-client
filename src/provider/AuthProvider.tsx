import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User, UserCredential } from "firebase/auth";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

interface AuthContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    createUserWithEmailAndPass: (email: string, password: string) => Promise<UserCredential>;
    createUserWithGoogle: () => Promise<UserCredential>;
    loginUser: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
}

const Authcontext = createContext<AuthContextType | null>(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }: {children: ReactNode}) => {
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
            setUser(currentUser);
            setLoading(false);
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