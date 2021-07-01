import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name, value} = event.target
    setNote(prevNotes=>{
      return{
        ...prevNotes,
        [name] : value
      }
    })
  }

  function onSubmit(event){
    props.addNote(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title}placeholder="Title" onChange={handleChange}/>
        <textarea name="content" value={note.content}placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;