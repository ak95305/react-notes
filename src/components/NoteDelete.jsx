import { useDispatch } from 'react-redux';
import trashIcon from './../assets/trash.svg'; 
import { delNote } from "./actions";

function NoteDelete(props) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        // console.log(props.id);
        dispatch(delNote(props.id));
    }

    return (
        <button className='trash-icon' onClick={handleDelete}>
            <img src={trashIcon} />
        </button>
    );
}

export default NoteDelete;
