import {NEW_COLUMN_LIST, NEW_COLUMN, NEW_CARD} from '../actions/board.actions';

export const columns = (state = [], action) => {
    switch(action.type){
        case NEW_COLUMN_LIST:
            return [...action.payload]
        case NEW_COLUMN: 
            return [...state, {...action.payload}]
        case NEW_CARD: 
            return state.map(column => {
                if(column.id === action.payload.columnId){
                    return {...column, cards: [...column.cards, {...action.payload}]}
                }
                return {...column}
            })
        default:
            return state;
    }
}