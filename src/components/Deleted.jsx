import React from "react";
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

function Deleted(props){
    const [mouse, setMouse] = React.useState(false);

    function handleMouse(){
        setMouse(true);
    }
    function mousehandle(){
        setMouse(false);
    }
    return (
        <div> 
            <div className="note" onMouseEnter={handleMouse} onMouseLeave={mousehandle} >
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                {mouse ? <button onClick={()=>props.get(props.id)} data-title= "Restore"><RestoreFromTrashIcon />
                </button> : null}
            </div>
        </div>
    )
}

export default Deleted;