export const getBoards = () => fetch('/boards').then(res => res.json())

export const createNewBoard = (title) => 
    fetch('/createNewBoard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
    }).then(res=>res.json());