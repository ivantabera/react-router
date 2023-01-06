import React from "react";
import {Link} from "react-router-dom";

export const PostItem = (props) => {

    return (
        <li>
            <Link to={props.slug} user={props.author}>
                {props.title}
            </Link>
        </li>
    )
};