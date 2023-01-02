import React, {createContext, useContext, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

const AuthContext = createContext();

const admin = ['ivanTabera', 'juanFer', 'auro'];

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);
    console.log(user);

    const login = ({username}) => {
        const isAdmin = admin.find(adm => adm === username);
        setUser({username, isAdmin});
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logout};

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export const AuthProtectedRoute = (props) => {
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/loginPage"/>
    }
    return props.children;
}