import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Deleted from "./Deleted";

function Main(){
    const [note, setNote] = React.useState([]);
    const [delNote, setDel] = React.useState([]);

    function addNote(newNotes){
        setNote((prevNotes)=>{
            return [...prevNotes, newNotes];
        })
    }

    function deleteNote(id){
        setNote(prevNotes=>{
            return prevNotes.filter((notes,index)=>{
                return index !== id;
            }) 
        })
        setDel(prevNotes=>{
            return [...prevNotes, note[id]];
        })
    }
    function getBack(id){
        setDel(prevNotes=>{
            return prevNotes.filter((notes,index)=>{
                return index !== id;
            })
        })
        setNote(prevNotes=>{
            return [...prevNotes, delNote[id]];
        })
    }
    return(
    <Switch>
        <Route exact path="/">
            <CreateArea addNote={addNote}/>
                {note.map((oneNote,index)=>{
                    return <Note key={index} id={index} title={oneNote.title} content={oneNote.content} onDelete={deleteNote}/>
                })}
        </Route>
        <Route exact path="/trash">
            <h3>Notes are deleted after seven days</h3>
            {delNote.length === 0 ? <div class="neVct-Ne3sFf-fmcmS">
            <img class="neVct-Ne3sFf-Bz112c" src="data:image/jpeg;base64,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" alt="trash">
            </img><div class="neVct-Ne3sFf-fmcmS">No notes in Trash</div></div> :
                delNote.map((oneDel, index)=>{
                    return <Deleted key={index} id={index} title={oneDel.title} content={oneDel.content} get={getBack} array={delNote}/>
            })}
        </Route>
    </Switch>
    )

}

export default Main;