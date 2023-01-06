import React, {useState} from "react";
import './PostForm.css'
import {useAuth} from "../auth/auth";

export const PostForm = ({handleNewPost, setOpenModal}) => {

    const auth = useAuth();

    const [newPostValue, setNewPostValue] = useState({
        title: '',
        content: '',
        slug: '',
        author: ''
    });

    const authorIntel = auth.user?.username ? auth.user.username : 'anonimo';

    const {title, content, slug} = newPostValue;

    const onSubmit = (e) => {
        e.preventDefault();
        handleNewPost(newPostValue);
        setOpenModal(false);
    }
    const onChange = (e) => {
        setNewPostValue({
                ...newPostValue,
                [e.target.name]: e.target.value,
                author: authorIntel
            }
        );
    }
    const onCancel = () => {
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Titulo de tu Post</label>
            <input
                name="title"
                type="text"
                placeholder="Escribe el titulo de tu poast"
                onChange={onChange}
                value={title}
            />
            <label>Escribe tu nuevo Post</label>
            <textarea
                name="content"
                placeholder="Escribe un nuevo post"
                onChange={onChange}
                value={content}
            />
            <label>Escribe el slug</label>
            <input
                name="slug"
                type="text"
                placeholder="Escribe el slug de tu post slug-post"
                value={slug}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}