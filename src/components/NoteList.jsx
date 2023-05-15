import { useSelector } from "react-redux";
import Note from "./Note"

function NoteList() {
  const notes = useSelector((state) => state.updNotes);
  return (
    <div className="note-list">
        {notes.map((item)=>{
          return <Note item={item} key={item.id}/>;
        })}
    </div>
  )
}

export default NoteList
