import { useDispatch } from 'react-redux';
import editIcon from './../assets/pencil.svg'; 
import { updModal, updNote } from './actions';

function NoteEdit(props) {

    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(updModal(props.id));
    }

    return (
        <button className='edit-icon' onClick={handleEdit}>
            <img src={editIcon} />
        </button>
    );
}

export default NoteEdit;
