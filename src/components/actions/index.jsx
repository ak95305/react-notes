export const addNote = (newNote) => {
    return {
        type: "ADD",
        payload: newNote
    }
}

export const delNote = (noteId) => {
    return {
        type: "DEL",
        payload: noteId
    }
}

export const updNote = (noteId, updNote) => {
    return {
        type: "UPD",
        payload: {
            id: noteId,
            updNote: updNote
        }
    }
}

export const updModal = (noteId) => {
    return {
        type: "CHNGE",
        payload: noteId
    }
}