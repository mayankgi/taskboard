export const getColumns = boardId => fetch(`/getColumns?boardId=${boardId}`).then(res => res.json())

export const createNewColumn = ({title, boardId}) => 
    fetch('/createNewColumn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, boardId})
    }).then(res => res.json())

export const createNewCard = (params) => 
    fetch('/createNewCard', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(res => {
        res.columnId = parseInt(res.columnId)
        return res;
    })

export const moveCard = (params) => 
    fetch('/moveCard', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(res => res.json())