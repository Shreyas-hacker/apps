//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"
import ArchiveIcon from '@material-ui/icons/Archive';

function Note(props){
    const[isMouse, setMouse] = React.useState(false);

    function handleMouse(){
        setMouse(true);
    }
    function mousehandle(){
        setMouse(false);
    }
    return(
        <div className="note" onMouseEnter={handleMouse} onMouseLeave={mousehandle}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {isMouse ? <div className="buttons" role="button" data-title= "Delete" onClick={()=>props.onDelete(props.id)}><DeleteIcon /></div> :null}
            {isMouse ? <div className="buttons" role="button" data-title= "Archive" onClick={()=>props.onArchive(props.id)}><ArchiveIcon /></div> : null}
        </div>
    );
}

export default Note;