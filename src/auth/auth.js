import {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);

    const login = ({username}) => {
        setUser({username});
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logout};
    console.log(auth);

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export {
    AuthProvider,
    useAuth
}