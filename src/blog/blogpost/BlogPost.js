import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {blogData} from "../../data/blogData";
import {useAuth} from "../../auth/auth";

export const BlogPost = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const {slug} = useParams();

    const findPost = blogData.find(post => post.slug === slug);

    const onReturn = () => {
        navigate('/blog')
    }

    const canDelete = auth.user?.isAdmin || findPost.author === auth.user?.username;

    return(
        <>
            <h2>{findPost.title}</h2>
            <button onClick={onReturn}>Volver a los post</button>
            <p>{findPost.content}</p>
            <p>{findPost.author}</p>

            {canDelete && (<button>Eliminar</button>)}
        </>
    )
}