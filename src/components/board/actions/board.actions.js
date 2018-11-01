import * as apis from '../apis/board.apis.js';

export const NEW_COLUMN_LIST = 'NEW_COLUMN_LIST';
export const NEW_COLUMN = 'NEW_COLUMN';
export const NEW_CARD = 'NEW_CARD';

export const getColumns = ({boardId}) => 
    dispatch => 
        apis.getColumns(boardId).then(res => dispatch({type: NEW_COLUMN_LIST, payload: res}))

export const createNewColumn = (params) =>
    dispatch => 
        apis.createNewColumn(params).then(res => dispatch({type: NEW_COLUMN, payload: res}))

export const createNewCard = (params) => 
    dispatch => 
        apis.createNewCard(params).then(res => dispatch({type: NEW_CARD, payload: res}));

export const moveCard = (params) => 
    dispatch => 
        apis.moveCard(params).then(res => console.log(res))