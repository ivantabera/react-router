import React, {useState} from "react";
import {useAuth} from "../auth/auth";

export const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({username})
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