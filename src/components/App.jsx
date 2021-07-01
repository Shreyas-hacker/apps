//2. Create a App.jsx component..
import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App(){
    const [note, setNote] = React.useState([]);

    function addNote(newNotes){
        setNote((prevNotes)=>{
            return [...prevNotes, newNotes];
        })
    }
    return (
        <div>
            <Header />
            <CreateArea addNote={addNote}/>
            {note.map((oneNote,index)=>{
                return <Note key={index} title={oneNote.title} content={oneNote.content} />
            })}
            <Footer />
        </div>
    );
}

export default App;