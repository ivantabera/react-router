import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {blogData} from "../../data/blogData";

export const BlogPost = () => {
    const navigate = useNavigate();
    const {slug} = useParams();

    const findPost = blogData.find(post => post.slug === slug);

    const onReturn = () => {
        navigate('/blog')
    }

    return(
        <>
            <h2>{findPost.title}</h2>
            <button onClick={onReturn}>Volver a los post</button>
            <p>{findPost.content}</p>
            <p>{findPost.author}</p>
        </>
    )
}