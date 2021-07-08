import React from "react";
import UnarchiveIcon from '@material-ui/icons/Unarchive';

function Archive(props){
    const [mouse, setMouse] = React.useState(false);

    function handlemouse(){
        setMouse(true)
    }
    function mouseout(){
        setMouse(false);
    }
    return (
        <div>
            <div className="note" onMouseEnter={handlemouse} onMouseLeave={mouseout}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                {mouse ? <div role="button" className="buttons" data-title="Unarchive" onClick={()=>{props.go(props.id)}}>
                <UnarchiveIcon />
                </div>:null}
            </div>
        </div>
    )
}

export default Archive;