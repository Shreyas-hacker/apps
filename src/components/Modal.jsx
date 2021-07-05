import React from "react";

function Modal(props){
    if(props.show){
        return null
    }
    return(
        <div id="myModal" class="modal">
            <div class ="modal-content">
                <span class="close">&times;</span>
                <p>Empty trash? All notes in Trash will be permanently deleted.</p>
            </div>
        </div>
    )
}

export default Modal;