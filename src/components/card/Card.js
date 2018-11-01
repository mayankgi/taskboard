import './card.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({id, description, allowRight, allowLeft, moveCard}) => (
    <div className="card">
        {
            allowLeft ? 
                <button 
                    aria-label="Move Card to Left"
                    onClick = {()=>moveCard('left', id)}
                >
                    &#60;
                </button>
                :undefined
        }
        
        <p>{description}</p>
        {
            allowRight ? 
                <button 
                    aria-label="Move Card to Right"
                    onClick = {()=>moveCard('right', id)}
                >
                    &#62;
                </button>
                :undefined
        }
        
    </div>
)

Card.defaultProps = {
    moveCard: ()=>{}
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    allowRight: PropTypes.bool, 
    allowLeft: PropTypes.bool,
    moveCard: PropTypes.func
}

export default Card;