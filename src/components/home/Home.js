import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import BoardList from '../board-list/BoardList';

import {getBoards, createNewBoard} from './actions/home.actions';

class Home extends Component{
    
    constructor(props){
        super(props);
        this.createNewBoard = this.createNewBoard.bind(this);
    }

    componentDidMount(){
        this.props.getBoards();
    }

    createNewBoard(){
        const title = window.prompt('New Board Title').trim();
        if(title && title !== ''){
            this.props.createNewBoard({title});
        }else{
            throw('Not Valid Entry.');
        }
    }

    render(){
        return (
            <div className="home">
                <button aria-label="Create New Board" onClick={this.createNewBoard}>+ New Board</button>
                <BoardList 
                    boards = {this.props.boards} 
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({
        getBoards, 
        createNewBoard  
    }, dispatch);

const mapStateToProps = (state) =>({
    boards: state.boards
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)