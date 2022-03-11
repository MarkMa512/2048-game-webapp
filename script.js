import Grid from "./components/Grid.js"
import Tile from "./components/Tile.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard)

console.log(grid.randomEmptyCell())

// get a random empty cell and assign it to a new tile 
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
