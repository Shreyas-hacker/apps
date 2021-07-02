//2. Create a App.jsx component..
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Navbar from "./Navbar";

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
            <Header />
            <Navbar />
            <CreateArea addNote={addNote}/>
            {note.map((oneNote,index)=>{
                return <Note key={index} id={index} title={oneNote.title} content={oneNote.content} onDelete={deleteNote}/>
            })}
            <Footer />
        </div>
    );
}

export default App;