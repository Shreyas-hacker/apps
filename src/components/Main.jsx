import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateArea from "./CreateArea";
import Note from "./Note";
import DeleteRouter from "./trash/DeleteRoute";
import ArchiveRouter from "./Archive/ArchiveRouter";

function Main(){
    const [note, setNote] = React.useState([]);
    const [delNote, setDel] = React.useState([]);
    const[show, setShow] = React.useState(false);
    const[arcNote, setArc] = React.useState([]);

    function showing(){
        setShow(true);
    }
    function close(){
        setShow(false);
    }
    function deleteArray(){
        setDel([]);
        setShow(false);
    }
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
    function archiveNote(id){
        setNote(prevNotes=>{
            return prevNotes.filter((notes,index)=>{
                return index !== id;
            })
        })
        setArc(prevNotes=>{
            return [...prevNotes, note[id]];
        })
    }
    function unArchive(id){
        setArc(prevNotes=>{
            return prevNotes.filter((notes,index)=>{
                return index !== id;
            })
        })
        setNote(prevNotes=>{
            return [...prevNotes, arcNote[id]];
        })
    }
    return(
    <Switch>
        <Route exact path="/">
            <CreateArea addNote={addNote}/>
                {note.map((oneNote,index)=>{
                    return <Note key={index} id={index} title={oneNote.title} content={oneNote.content} onDelete={deleteNote} onArchive={archiveNote}/>
                })}
        </Route>
        <Route exact path="/trash">
            <DeleteRouter array={delNote} delete={deleteArray} get={getBack} show={showing} element={show} closing={close}/>
        </Route>
        <Route exact="/archive">
            <ArchiveRouter array={arcNote} go={unArchive}/>
        </Route>
    </Switch>
    )

}

export default Main;