import React from "react";
import {NavLink} from "react-router-dom";
export const Menu = () => {

    return(
        <nav>
            <ul>
                {
                    routes.map(route => (
                        <li>
                            <NavLink
                                style={({isActive}) => ({
                                    color: isActive ? 'blue' : 'red'
                                })}
                                to={route.to}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

const routes = [];
routes.push(
    {
        to: '/',
        text: 'Home'
    },
    {
        to: '/blog',
        text: 'Blog'
    },
    {
        to: '/profile',
        text: 'Profile'
    }
)