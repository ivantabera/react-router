import React, {useState} from "react";
import '../postForm/PostForm.css'

export const EditForm = ({handleEditPost, setOpenModal, props}) => {

    const [newPostValue, setNewPostValue] = useState({
        title: props.findpost.title,
        content: props.findpost.content,
        slug: props.findpost.slug,
        author: props.findpost.author
    });


    const {title, content, slug} = newPostValue;

    const onSubmit = (e) => {
        e.preventDefault();
        handleEditPost(newPostValue);
        setOpenModal(false);
    }
    const onChange = (e) => {
        setNewPostValue({
                ...newPostValue,
                [e.target.name]: e.target.value
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
                readOnly
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