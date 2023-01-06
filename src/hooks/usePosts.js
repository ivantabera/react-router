import {useState} from 'react';
import {useLocalStorage} from "./useLocalStorage";

export const usePosts = () => {

    const {
        item: posts,
        saveItems: savePosts,
        sincronizeItem: sincronizePosts,
        loading,
        error
    } = useLocalStorage('POST_V1', []);

    const [openModal, setOpenModal] = useState(false);

    //Obtener el total de Post
    const totalPost = posts.length;

    //Obtener todos los post del localStorage
    let allPost = posts;

    // Agregar informacion sobre nuevos post
    const handleNewPost = (newPostValue) => {
        // Generamos un nuevo array con la copia de todos los POSTS
        const newArrayPosts = [...posts];
        // Agregamos el nuevo POST a la lista
        newArrayPosts.push(newPostValue)
        // Actualizamos el estado de los POST
        savePosts(newArrayPosts)
    }

    // Manejador de POST eliminados
    const handleDeletePost = (slug) => {
        // buscar el index del TODO por medio del texto
        const todoIndex = posts.findIndex(post => post.slug === slug);
        // Generamos un nuevo array con la copia de todos los TODOS
        const newArrayPosts = [...posts];
        // Cambiamos el contenido del array en este caso eliminamos
        newArrayPosts.splice(todoIndex, 1);
        savePosts(newArrayPosts);
    }

    // Manejador de POST edicion
    const handleEditPost = (editPost) => {
        // buscar el index del POST por medio del slug
        const postIndex = posts.findIndex(post => post.slug === editPost.slug);
        // Generamos un nuevo array con la copia de todos los TODOS
        const newArrayPost = [...posts];
        // Accedemos al index del POST seleccionado y le asignamos los valores correspondientes en sus propiedades
        newArrayPost[postIndex].title = editPost.title;
        newArrayPost[postIndex].content = editPost.content;
        // Actualizamos el estado de los POST
        savePosts(newArrayPost)
    }

    return {
        loading,
        error,
        openModal,
        setOpenModal,
        totalPost,
        handleNewPost,
        handleDeletePost,
        handleEditPost,
        allPost,
        sincronizePosts
    }
}