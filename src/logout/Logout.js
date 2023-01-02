import React from "react";
import {useAuth} from "../auth/auth";

export const Logout = () => {
    const auth = useAuth();

    const logout = () => {
        auth.logout();
    };

    return(
        <>
            <h1>LogoutPage</h1>
            <form onSubmit={logout}>
                <label>¿Seguro que deseas salir?</label>
                <button>salir</button>
            </form>
        </>
    )
}