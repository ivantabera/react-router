import React from "react";
import {Outlet} from "react-router-dom";
import {Modal} from "../modal/Modal";
import {PostForm} from "../postForm/PostForm";
import {CreatePostButton} from "./createPostButton/CreatePostButton";
import {usePosts} from "../hooks/usePosts";
import {PostList} from "../post/postList/PostList";
import {PostItem} from "../post/postItem/PostItem";
import {PostError} from "../messaggeComponent/postError/PostError";
import {PostLoading} from "../messaggeComponent/postLoading/PostLoading";
import {PostEmpty} from "../messaggeComponent/postEmpty/PostEmpty";
import {useAuth} from "../auth/auth";

export const Blog = () => {

    // Hook para manipulacion de posts
    const {
        error,
        loading,
        openModal,
        setOpenModal,
        totalPost,
        handleNewPost,
        allPost
    } = usePosts();

    const auth = useAuth();
    const userLog = auth.user?.isAdmin;

    return (
        <>
            <h2>BlogPage</h2>

            {/*Modal para agregar mas posts*/}
            {!!openModal && (
                <Modal>
                    <PostForm
                        handleNewPost={handleNewPost}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            {/*Validar si hay admin para mostrar el Boton para abrir la ventana modal*/}
            {userLog && <CreatePostButton setOpenModal={setOpenModal}/>}


            {/*Componente para usar las NestedRoutes*/}
            <Outlet/>

            {/*Componente de Lista para posts*/}
            <PostList
                error={error}
                loading={loading}
                allPost={allPost}
                totalPost={totalPost}
                onError={() => <PostError/>}
                onLoading={() => <PostLoading/>}
                onEmpty={() => <PostEmpty/>}
                render={post => (
                    <PostItem
                        key={post.title}
                        title={post.title}
                        slug={post.slug}
                        author={post.author}
                    />
                )
                }
            >

            </PostList>

        </>

    )
}
