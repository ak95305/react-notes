function NoteButton({ handleModal, handleSave }) {
  return (
    <div className="note-btns">
        <button className="save-btn" onClick={ handleSave }>Save</button>
        <button className="cancel-btn" onClick={ handleModal }>Cancel</button>
    </div>
  )
}

export default NoteButton
