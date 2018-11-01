import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import {boards} from '../components/home/reducers/home.reducers';
import {columns} from '../components/board/reducers/board.reducers';

var reducer = combineReducers({
    boards,
    columns
});

export var configure = (initialState = {}) => {
    var store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};
  
  