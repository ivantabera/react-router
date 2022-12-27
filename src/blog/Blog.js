import React from "react";
import {Link, Outlet} from "react-router-dom";
import {blogData} from "../data/blogData";
export const Blog = () => {
    return(
        <>
            <h2>BlogPage</h2>

            {/*Componente para usar las NestedRoutes*/}
            <Outlet />

            <ul>
                {
                    blogData.map(post =>(
                        <BlogLink key={post.slug} post={post} />
                    ))
                }
            </ul>
        </>

    )
}

function BlogLink({post}) {
    return(
        <li>
            <Link to={post.slug} >{post.title}</Link>
        </li>
    )
}