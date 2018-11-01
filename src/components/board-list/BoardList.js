import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BoardList = ({boards}) => {
    
    const renderBoard = (boards) => 
        boards.map(board =>  
            <Board 
                title={board.title} 
                key={board.id} 
                id={board.id}
            />
        )
        
    return (
        <ul>
            {renderBoard(boards)}
        </ul>
    )
}

BoardList.defaultProps = {
    boards: []
}

BoardList.propTypes = {
    boards: PropTypes.array
}

const Board = ({title, id}) => (
    <li>
        <Link to={`/board/${id}`}>
            <p>{title}</p>
        </Link>
    </li>
)

Board.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default BoardList;