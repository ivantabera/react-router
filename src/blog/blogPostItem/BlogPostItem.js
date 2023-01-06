import React, {useState} from "react";
import {useAuth} from "../../auth/auth";
import {usePosts} from "../../hooks/usePosts";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../modal/Modal";
import {EditPostButton} from "../editPostButton/EditPostButton";
import {EditForm} from "../../editForm/EditForm";

export const BlogPostItem = (props) => {
    const navigate = useNavigate()

    //Validar si el usuario puede eliminar el artículo
    const auth = useAuth();
    const isAdmin = auth.user?.isAdmin === undefined ? 'noAdmin' : auth.user?.isAdmin;
    const isAuthor = props.findpost.author === 'anonimo' ? 'noAuthor' : props.findpost.author;
    const cantDelete = isAuthor === isAdmin;

    //Editar articulo
    const {openModal, handleEditPost, setOpenModal, handleDeletePost} = usePosts();

    //Eliminar articulo
    const handleClick = (slug) => {
        handleDeletePost(slug);
        navigate('/')
    }

    return (
        <>
            {/*Modal para agregar mas posts*/}
            {!!openModal && (
                <Modal>
                    <EditForm
                        props={props}
                        handleEditPost={handleEditPost}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}
            {cantDelete && <EditPostButton setOpenModal={setOpenModal}/>}

            <h2>{props.findpost.title}</h2>
            <p>{props.findpost.content}</p>
            <p>{props.findpost.author}</p>

            {cantDelete && (
                <button
                    onClick={() => handleClick(props.findpost.slug)}
                >
                    Eliminar
                </button>
            )}
        </>
    )
}