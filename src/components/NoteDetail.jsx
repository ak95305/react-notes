function NoteDetail({ handleInput }) {
  return (
    <div className="note-detail">
        <div className="note-heading">
          <input type="text" name="heading" placeholder="Write Heading..." onChange={handleInput}/>
        </div>
        <div className="note-desc">
          <textarea type="text" name="desc" placeholder="Write Something..." rows={10} cols={10} onChange={handleInput}></textarea>
        </div>
    </div>
  )
}

export default NoteDetail
