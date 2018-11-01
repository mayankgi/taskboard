import {FETCH_BOARDS, NEW_BOARD} from '../actions/home.actions';

export const boards = (state = [], action) => {
    switch(action.type){
        case FETCH_BOARDS: 
            return [...action.payload]
        case NEW_BOARD: 
            return [...state, {...action.payload}]
        default: 
            return state;
    }
}