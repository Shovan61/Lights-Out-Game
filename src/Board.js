import React, { PureComponent } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends React.Component{
static defaultProps = {
nrows: 5,
ncols: 5,
chanceLit: 0.25
};
    
constructor(props){
  super(props);
  this.state = {
      hasWin: false,
      board: this.createBoard()
  }  
};


createBoard(){
let board = [];

for(let x = 0; x < this.props.nrows; x++){
let row = [];
for (let y = 0; y < this.props.ncols; y++){
    row.push(Math.random() < this.props.chanceLit);
 }
  board.push(row);
  
}
  return board;
  
};



flipCellBoard(coord){

let board = this.state.board;
let [x, y] = coord.split("-").map(Number);
const nrows = this.props.nrows;
const ncols = this.props.ncols;


function reverse(x, y){
    if(x >= 0 && x < nrows && y >= 0 && y < ncols){
        board[x][y] = !board[x][y];
    }
};

reverse(x, y)
reverse(x, y - 1);
reverse(x, y + 1);
reverse(x - 1, y);
reverse(x + 1, y);


let hasWin = board.every(row => row.every(cell => !cell));

this.setState({board, hasWin})

}



render() {
if(this.state.hasWin){
   return (
       <div className="won">
         <h1 className="neon">You</h1>
         <h1 className="flux">Won</h1>
       </div>
   )
}

let tboard = [];

for(let x = 0; x < this.props.nrows; x++){
    let row = [];
    for(let y =0; y < this.props.ncols; y++){
        let coordinate = `${x}-${y}`;
      row.push(<Cell key={coordinate} isLit={this.state.board[x][y]} flipCell={() => this.flipCellBoard(coordinate)}/>)
    }

    tboard.push(<tr key={x}>{row}</tr>)
}

    return (        
          <div>
              <div className="header">
                   <h1 className="neon">Lights</h1>
                   <h1 className="flux">Out</h1>
              </div>
            <table>
                <tbody className="Board">
                    {tboard}
                </tbody>
            </table> 
          </div>       
    )
}

};

export default Board;

