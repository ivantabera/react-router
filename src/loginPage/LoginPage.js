import React, {useState} from "react";
import {useAuth} from "../auth/auth";
import {Navigate} from "react-router-dom";

export const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({username})
    };

    if(auth.user) {
        return <Navigate to="/profile" />
    }

    return (
        <>
            <h1>LoginPage</h1>
            <form onSubmit={login}>
                <label>Nombre de usuario</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button>Login</button>
            </form>
        </>
    )
}