import React from "react";
import GetAppIcon from '@material-ui/icons/GetApp';

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
                {mouse ? <button onClick={()=>props.get(props.id)}><GetAppIcon /></button> : null}
            </div>
        </div>
    )
}

export default Deleted;