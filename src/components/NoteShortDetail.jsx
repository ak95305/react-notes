function NoteShortDetail(props) {
    // console
    return (
        <div className="note-det">
            <div className="note-head">{props.item.head}</div>
            <div className="note-details">
                {props.item.desc}
            </div>
        </div>
    );
}

export default NoteShortDetail;
