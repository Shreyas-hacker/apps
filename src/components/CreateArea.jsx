import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

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

  const [isClicked, setClick] = React.useState(false);

  function handleClick(){
    setClick(true);
  }
  return (
    <div>
      <form className="create-note">
        {isClicked ? <input name="title" value={note.title}placeholder="Title" onChange={handleChange}/> : null}
        <textarea name="content" value={note.content} placeholder="Take a note..." onClick={handleClick} rows={isClicked ? "3" : "1"} onChange={handleChange}/>
        <Zoom in={isClicked}>
          <Fab onClick={onSubmit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;