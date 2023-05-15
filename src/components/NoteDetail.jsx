import { useSelector } from "react-redux";

function NoteDetail( props ) {
  const notes = useSelector(state => state.updNotes);
  const note = notes.find(item => item.id==props.note.id);
  return (
    <div className="note-detail">
        <div className="note-heading">
          <textarea type="text" name="heading" placeholder="Write Heading..." cols={10} defaultValue={note ? note.head : ""} onChange={props.handleInput}></textarea>
        </div>
        <div className="note-desc">
          <textarea type="text" name="desc" placeholder="Write Something..." rows={10} cols={10} defaultValue={note ? note.desc : ""} onChange={props.handleInput}></textarea>
        </div>
    </div>
  )
}

export default NoteDetail
