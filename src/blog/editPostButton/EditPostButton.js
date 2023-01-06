import React from 'react';

export const EditPostButton = (props) => {
    const handleClick = () =>{
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={handleClick}
        >
            Editar Post
        </button>
    )
}