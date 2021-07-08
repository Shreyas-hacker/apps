import React from "react";
import UnarchiveIcon from '@material-ui/icons/Unarchive';

function Archive(){
    return (
        <div>
            <div className="note">
                <h1>Title</h1>
                <p>Content</p>
                <div role="button" className="buttons" data-title="Unarchive"><UnarchiveIcon /></div>
            </div>
        </div>
    )
}

export default Archive;