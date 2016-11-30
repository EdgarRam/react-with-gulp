class Square extends React.Component {

    render() {
        const clasStyle = "square" + (this.props.sel ? " bold" : "");
        return (
            <button className={clasStyle} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

}


class Board extends React.Component {


    renderSquare(i) {
        return <Square key={i} sel={this.props.select == i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }


    render() {
        let board = [];
        let row = [];
        let cellNumber = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare( cellNumber ));
                cellNumber++;
            }
            board.push(<div key={i} className="board-row">{ row }</div>)
            row = [];
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
            orderBy: false //si orderBy = true es ascendente en caso contrario descendente
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const x = (i%3) + 1;
        const y = parseInt( i  / 3) + 1;

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                position: {
                    x: x,
                    y: y,
                    col: i
                }
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            select: i
        });
    }

    jumpTo(step) {
        if( step > 0){
            this.setState({
                stepNumber: step,
                xIsNext: (step % 2) ? false : true,
                select: this.state.history[step].position.col
            });
        }
    }

    handleOrderBy(){
        this.setState({
            orderBy: !this.state.orderBy
        });
    }

    renderMoves( step, i ){
        const desc = step.position ? 'Move (' + step.position.x + ',' + step.position.y + ')' : 'Game start';
        return(
            <li key={i}>
                {i} <a href="#" onClick={() => this.jumpTo(i)}>{desc}</a>
            </li>
        )
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        if (winner) {
            status = 'Winner: ' + winner;
        }

        let moves = [];
        if( this.state.orderBy ){
            for (let i =  (history.length -1); i >= 0; i--) {
                let step = history[i];
                moves.push( this.renderMoves( step, i ) )
            }
        }
        else{
            for (let i = 0; i < history.length; i++) {
                let step = history[i];
                moves.push( this.renderMoves( step, i ) )
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board select={this.state.select} squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={(e) => this.handleOrderBy()} >Ordenar </button>
                    <ul>{moves}</ul>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('container')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
