import { useDispatch, useSelector } from "react-redux";
import NoteButton from "./NoteButton";
import NoteDetail from "./NoteDetail";
import { addNote, updNote } from "./actions";
import uuid from "react-uuid";

function NoteModal({ handleModal }) {
    let note = { id: "", head: "", desc: "" };
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.updModal);
    const notes = useSelector((state) => state.updNotes);

    if (modalData.id) {
        const selNote = notes.find((item) => item.id == modalData.id);
        note = { id: selNote.id, head: selNote.head, desc: selNote.desc};
    }

    const handleInput = (event) => {
        if (event.target.name == "heading") {
            note.head = event.target.value;
        }
        if (event.target.name == "desc") {
            note.desc = event.target.value;
        }
    };

    const handleSave = () => {
        if (!modalData.id) {
            note.id = uuid();
            dispatch(addNote(note));
        } else {
            dispatch(updNote(modalData.id, note));
        }
        handleModal();
    };

    return (
        <div className="note-modal">
            <NoteDetail note={modalData} handleInput={handleInput} />
            <NoteButton handleModal={handleModal} handleSave={handleSave} />
        </div>
    );
}

export default NoteModal;
