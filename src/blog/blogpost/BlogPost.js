import React from "react";
import {useParams} from "react-router-dom";
import {blogData} from "../../data/blogData";

export const BlogPost = () => {
    const {slug} = useParams();

    const findPost = blogData.find(post => post.slug === slug);

    return(
        <>
            <h2>{findPost.title}</h2>
            <p>{findPost.content}</p>
            <p>{findPost.author}</p>
        </>
    )
}