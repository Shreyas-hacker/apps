import React from "react";

function Modal(props){
    if(!props.show){
        return null;
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <div className="modal-body">
                    Empty trash? All notes in Trash will be permanently deleted.
                </div>
                <div className="modal-footer">
                    <div role="button" onClick={props.onClose} className="closebutton">Cancel</div>
                    <div role="button" className="trashbutton" onClick={props.empty}>Empty Trash</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;