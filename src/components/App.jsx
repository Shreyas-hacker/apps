//2. Create a App.jsx component..
import React from "react";
import Navbar from "./Navbar";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
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
    return (
        <div>
            <Navbar/>
            <CreateArea addNote={addNote}/>
            {note.map((oneNote,index)=>{
                return <Note key={index} id={index} title={oneNote.title} content={oneNote.content} onDelete={deleteNote}/>
            })}
        </div>
    );
}

export default App;