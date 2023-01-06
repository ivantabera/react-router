import React from 'react';

export const CreatePostButton = (props) => {
    const handleClick = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={handleClick}
        >
            +
        </button>
    )
}