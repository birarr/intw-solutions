import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const rowStyle = {
  display: 'flex',
}

const squareStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'black',
}

const boardStyle = {
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  border: '3px #eee solid',
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const instructionsStyle = {
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
}

const buttonStyle = {
  marginTop: '15px',
  marginBottom: '16px',
  width: '80px',
  height: '40px',
  backgroundColor: '#8acaca',
  color: 'white',
  fontSize: '16px',
}.gameBoard

function Square({ playerMark, squareId, handleSquareClick }) {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={() => handleSquareClick(squareId)}
    >
      {playerMark}
    </div>
  )
}

function Board({
  board,
  isXnext,
  winner,
  gameOver,
  handleSquareClick,
  handleReset,
}) {
  return (
    <div style={containerStyle} className="gameBoard">
      {gameOver && !winner
        ? 'Game Over'
        : winner
        ? 'Winner: ' + winner
        : 'Next Player: ' + (isXnext ? 'X' : 'O')}
      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        {board.map((playerMark, idx) => (
          <Square
            key={idx}
            squareId={idx}
            playerMark={playerMark}
            handleSquareClick={handleSquareClick}
          />
        ))}
      </div>
    </div>
  )
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function Game() {
  let initialState = {
    board: Array(9).fill(null),
    isXnext: true,
    gameOver: false,
  }
  const [board, setBoard] = useState(initialState.board)
  const [isXnext, setIsXNext] = useState(initialState.isXnext)
  const [isGameOver, setIsGameover] = useState(initialState.board.gameOver)
  let winner = false
  const isWinner = winningCombinations.some((combo) => {
    const [id1, id2, id3] = combo
    const marks = [board[id1], board[id2], board[id3]]
    const [firstmark] = marks
    const isWinningCombo =
      firstmark && marks.every((mark) => mark === firstmark)
    if (isWinningCombo) {
      winner = firstmark
      return true
    }
    return null
  })

  let squareClicked = (i) => {
    const tempBoard = [...board]
    if (winner || tempBoard[i]) return
    tempBoard[i] = isXnext ? 'X' : 'O'
    setIsGameover(isWinner || tempBoard.every((mark) => !!mark))
    setBoard(tempBoard)
    setIsXNext(!isXnext)
  }

  let resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setIsGameover(false)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          board={board}
          isXnext={isXnext}
          winner={winner}
          gameOver={isGameOver}
          handleSquareClick={squareClicked}
          handleReset={resetGame}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<Game />, document.getElementById('root'))
