import React from "react";

function Modal(props){
    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-header">
                    <h4>Clear Trash</h4>
                </div>
                <div className="modal-body">
                    Clear Trash? All notes would be deleted
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;