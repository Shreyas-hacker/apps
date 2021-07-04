import React from "react";
import GetAppIcon from '@material-ui/icons/GetApp';

function Deleted(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>props.get(props.id)}><GetAppIcon /></button>
        </div>
    )
}

export default Deleted;