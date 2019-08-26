import React from 'react';
import logo from './logo.svg';
import './App.css';
import { string } from 'prop-types';

const App: React.FC = () => {
    return <Game />;
};

export default App;
function Square(props: { value: string; onclick: () => void }) {
    return (
        <button className="square" onClick={props.onclick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component<{}, { squares: string[]; xIsNext: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            squares: Array<string>(9).fill(''),
            xIsNext: true
        };
    }
    renderSquare(i: number) {
        return <Square value={this.state.squares[i]} onclick={() => this.handleClick(i)} />;
    }
    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
