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

export const updNote = (noteId) => {
    return {
        type: "UPD",
        payload: noteId
    }
}

export const updModal = () => {
    return {
        type: "CHNGE"
    }
}