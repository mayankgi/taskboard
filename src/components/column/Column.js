import './column.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Column = ({id, title, onClick, children}) => (
    <section className="column">
        <header>{title}</header>
        <div className = "cards">
            {children}
        </div>
        <button aria-label="Add New Card" onClick={()=>onClick(id)}>+ Card</button>
    </section>
)

Column.defaultProps={
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
}
export default Column;