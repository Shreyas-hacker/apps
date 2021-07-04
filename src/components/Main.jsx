import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateArea from "./CreateArea";
import Note from "./Note";

function Main(){
    const [note, setNote] = React.useState([]);

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
    }
    return(
    <Switch>
        <Route exact path="/">
            <CreateArea addNote={addNote}/>
                {note.map((oneNote,index)=>{
                    return <Note key={index} id={index} title={oneNote.title} content={oneNote.content} onDelete={deleteNote}/>
                })}
        </Route>
    </Switch>
    )

}

export default Main;