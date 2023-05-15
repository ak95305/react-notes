import { useDispatch } from "react-redux";
import NoteButton from "./NoteButton";
import NoteDetail from "./NoteDetail";
import { addNote } from "./actions";
import uuid from "react-uuid";

function NoteModal({ handleModal }) {
    let newNote = { id: "", head: "", desc: "" };
    const dispatch = useDispatch();

    const handleInput = (event) => {
        if (event.target.name == "heading") {
            newNote.head = event.target.value;
        }
        if (event.target.name == "desc") {
            newNote.desc = event.target.value;
        }
    };

    const handleSave = () => {
        newNote.id = uuid();
        dispatch(addNote(newNote));
        handleModal();
    };

    return (
        <div className="note-modal">
            <NoteDetail handleInput={handleInput} />
            <NoteButton handleModal={handleModal} handleSave={handleSave} />
        </div>
    );
}

export default NoteModal;
