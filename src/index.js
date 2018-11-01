import 'index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configure} from 'store/configure.store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//components
import Login from 'components/login/Login';
import Home from 'components/home/Home';
import Board from 'components/board/Board';

let store = configure();

const App = () => (
    <div className="app"> 
        <Route exact={true} path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/board/:boardId" component={Board} />
    </div>
)

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

