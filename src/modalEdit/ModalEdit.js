import React from "react";
import ReactDOM from "react-dom";
import '../modal/Modal.css';

export const ModalEdit = ({children}) => {
    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.getElementById('modalEdit')
    )
}
