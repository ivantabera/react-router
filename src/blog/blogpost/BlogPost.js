import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {BlogPostItem} from "../blogPostItem/BlogPostItem";

export const BlogPost = (props) => {
    const navigate = useNavigate();
    const {slug} = useParams();

    const findPost = props.allPost.find(post => post.slug === slug);

    const onReturn = () => {
        navigate('/blog')
    }

    return (
        <>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.error) &&
                <BlogPostItem
                    findpost={findPost}
                />
            }

            <button onClick={onReturn}>Volver a los post</button>
        </>
    )
}