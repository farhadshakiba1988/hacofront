import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
/*import "@lourenci/react-kanban/dist/styles.css";*/
import "./../../../Styles/react-kanban/dist/styles.css"
import { Modal, Button } from 'antd';

// Use your own styles to override the default styles
// import "./styles.css"
import Archive from "../Archive/Archive";

const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Card title 1",
                    description: "Card content"
                },
                {
                    id: 2,
                    title: "Card title 2",
                    description: "Card content"
                },
            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 9,
                    title: "Card title 9",
                    description: "Card content"
                }
            ]
        },
        {
            id: 3,
            title: "Q&A",
            cards: [
                {
                    id: 10,
                    title: "Card title 10",
                    description: "Card content"
                },
                {
                    id: 11,
                    title: "Card title 11",
                    description: "Card content"
                }
            ]
        },
        {
            id: 4,
            title: "Production",
            cards: [
                {
                    id: 12,
                    title: "Card title 12",
                    description: "Card content"
                },
                {
                    id: 13,
                    title: "Card title 13",
                    description: "Card content"
                }
            ]
        }
    ]
};
function ControlledBoard() {
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    return (


        <Board onCardDragEnd={handleCardMove} disableColumnDrag
        >
            {controlledBoard}

        </Board>
    );
}
function UncontrolledBoard(props){
    return (
        <Board

            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
            })}
            onCardNew={console.log}


        />
    );
}
class Kanban extends Component {
/*const Kanban = () => {*/
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <h4>Example of an uncontrolled board</h4>
                <UncontrolledBoard


                />

                <h4>Example of a controlled board</h4>
                <p>Just the card moving is implemented in this demo.</p>
                <p>
                    In this kind of board, you can do whatever you want. We just mirror your
                    board state.
                </p>
                <ControlledBoard/>
            </>
        );
    };
};
export default Kanban;
{/*  <Button type="primary" onClick={this.showModal}>
            Open Modal
        </Button>*/}