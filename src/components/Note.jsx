import NoteDelete from "./NoteDelete"
import NoteEdit from "./NoteEdit"
import NoteShortDetail from "./NoteShortDetail"

function Note(props) {
  return (
    <div className="note">
        <NoteShortDetail item={props.item}/>
        <NoteDelete id={props.item.id}/>
        <NoteEdit id={props.item.id}/>
    </div>
  )
}

export default Note
