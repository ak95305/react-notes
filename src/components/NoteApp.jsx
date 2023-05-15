import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";
import NoteModal from "./NoteModal";
import { useDispatch, useSelector } from "react-redux";
import { updModal } from "./actions";

function NoteApp() {
    const showModal = useSelector((state)=>state.updModal.open);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(updModal());
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
