import addIcon from './../assets/plus.svg'

function NoteAdd({ handleModal }) {
  return (
    <button className='add-icon' onClick={ handleModal}>
      <img src={addIcon} alt="" / >
    </button>
  )
}

export default NoteAdd
