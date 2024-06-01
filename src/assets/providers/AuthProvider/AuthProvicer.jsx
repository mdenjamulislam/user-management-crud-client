import React, { createContext, useState } from 'react';
import auth from '../../../authentication/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvicer = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        signUp,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvicer;