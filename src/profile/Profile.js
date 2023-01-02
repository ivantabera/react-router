import React from "react";
import {useAuth} from "../auth/auth";
export const Profile = () => {
    const auth = useAuth();

    return(
        <>
            <h1>ProfilePage</h1>
            <p>Bienvenido {auth.user.username}</p>
        </>
    )
}