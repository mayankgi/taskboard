import * as apis from '../apis/home.apis';

export const FETCH_BOARDS = "FETCH_BOARDS";
export const NEW_BOARD = "NEW_BOARD";

export const getBoards = () => 
    dispatch => 
        apis.getBoards().then(res => dispatch({type: FETCH_BOARDS, payload: res}));


export const createNewBoard = params => 
    dispatch => 
        apis.createNewBoard(params.title).then(res=>dispatch({type: NEW_BOARD, payload: res}));