import './board.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getColumns, createNewColumn, createNewCard, moveCard} from './actions/board.actions';
import Column from '../column/Column';
import Card from '../card/Card';

class Board extends Component{
    constructor(props){
        super(props);
        this.createNewColumn = this.createNewColumn.bind(this);
        this.createNewCard = this.createNewCard.bind(this);
        this.moveCard = this.moveCard.bind(this);
    }

    componentDidMount(){
        const {boardId} = this.props.match.params;
        this.props.getColumns({boardId});
    }

    createNewColumn(){
        const {boardId} = this.props.match.params;
        const title = window.prompt('Please enter title for new column').trim();
        if(title && title!==''){
            this.props.createNewColumn({title, boardId});
        }
    }

    createNewCard(columnId){
        let description = window.prompt('Please enter card description.');
        description = description ? description.trim() : '';
        if(description !== '')
            this.props.createNewCard({columnId, description})
    }

    moveCard(position, cardId){
        let cardToMove;
        const columnIndex =  this.props.columns.findIndex((column) => {
            const cards = column.cards;
            let found = false;
            for(let i = 0, l = cards.length; i < l; i++){
                const card = cards[i];
                if(card.id === cardId){
                    found = true;
                    cardToMove = card;
                }
            }
            return found;
        });
        let columnId; 
        if(position === 'left'){
            columnId = this.props.columns[columnIndex - 1].id;
        }else {
            columnId = this.props.columns[columnIndex + 1].id;
        }
        this.props.moveCard({card: {...cardToMove, columnId}})
    }

    getCardComponent(card, columnIndex, columnsLength){
        const {id, description} = card;
        return (
            <Card 
                id = {id}
                key={`card${id}`}
                description = {description}
                allowRight = {columnIndex !== columnsLength - 1}
                allowLeft = {columnIndex !== 0}
                moveCard = {this.moveCard}
            />
        )
    }

    getColumnComponent(column, index, columns){
        const {id, title, cards} = column;
        return (
            <Column 
                id={id}
                title={title} 
                onClick = {this.createNewCard}
                key={'column'+column.id}
            >
                {cards && cards.map((card)=>this.getCardComponent(card, index, columns.length))}
            </Column>
        )
    }
    
    render(){
        return (
            <div className="board">
                <div>
                    <button aria-label="create new column" onClick={this.createNewColumn}>+ Column</button>
                </div>
                <div className="columns">
                    {this.props.columns.map(this.getColumnComponent.bind(this))}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    createNewColumn,
    getColumns,
    createNewCard,
    moveCard
}, dispatch)

const mapStateToProps = (state) => ({
    columns: state.columns
})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
