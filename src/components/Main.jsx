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
            {delNote.length === 0 ? <div class="neVct-Ne3sFf-fmcmS">No notes in Trash</div> :
                delNote.map((oneDel, index)=>{
                    return <Deleted key={index} id={index} title={oneDel.title} content={oneDel.content} get={getBack} array={delNote}/>
            })}
        </Route>
    </Switch>
    )

}

export default Main;