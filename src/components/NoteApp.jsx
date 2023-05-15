import { useState } from "react";
import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";
import NoteModal from "./NoteModal";

function NoteApp() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="react-app">
            <h1>React Note</h1>
            <NoteList />
            {(showModal) ? <NoteModal handleModal={toggleModal}/> : ""}
            <NoteAdd handleModal={toggleModal}/>
        </div>  
    );
}

export default NoteApp;
