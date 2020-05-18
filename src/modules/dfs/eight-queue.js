/*
 * @Author       : lj0812
 * @Date         : 2020-05-18 19:49:19
 * @LastEditTime : 2020-05-18 23:26:00
 * @Description  : 8皇后问题
 */
let count = 0

function hasClash (board, x, y) {
  const len = board.length

  for (let i = 0; i < len; i++) {
    const hasRowClash = board[x][i] === 1
    const hasColClash = board[i][y] === 1

    const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]]

    const hasSlashClash = directions.some(([xMark, yMark]) => {
      const newX = x + xMark * (i + 1)
      const newY = y + yMark * (i + 1)

      return board[newX] && board[newX][newY] === 1
    })

    if (hasRowClash || hasColClash || hasSlashClash) {
      return true
    }
  }

  return false
}

function drop (board, depth, maxDepth) {
  if (depth >= maxDepth) {
    count++
    console.log(count, board)
    return false
  }

  for (let i = 0; i < maxDepth; i++) {
    if (!hasClash(board, depth, i)) {
      board[depth][i] = 1
      drop(board, depth + 1, maxDepth)
      board[depth][i] = 0
    }
  }
}

function getChessBoard (size, chess = 0) {
  let chessBoard = []
  for (let i = 0; i < size; i++) {
    chessBoard.push(Array(size).fill(chess))
  }

  return chessBoard
}

function start () {
  const chessBoard = getChessBoard(8)

  drop(chessBoard, 0, chessBoard.length)

  console.log(count)
}

start()
