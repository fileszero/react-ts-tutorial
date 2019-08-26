import React from 'react';
import logo from './logo.svg';
import './App.css';
import { string } from 'prop-types';

const App: React.FC = () => {
    return <Game />;
};

export default App;
class Square extends React.Component<{ value: string; onclick: () => void }> {
    //propsの型を指定
    constructor(props: { value: string; onclick: () => void }) {
        super(props);
    }
    render() {
        return (
            <button className="square" onClick={this.props.onclick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component<{}, { squares: string[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            squares: Array<string>(9).fill('')
        };
    }
    renderSquare(i: number) {
        return <Square value={this.state.squares[i]} onclick={() => this.handleClick(i)} />;
    }
    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    render() {
        const status = 'Next player: X';

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
