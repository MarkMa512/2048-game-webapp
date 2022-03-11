import Cell from "./Cell.js"
// variables to manipulate the cells 
const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid {
    #cells // private vairable only accessible inside the Grid class, 
    // allowing access to individual cells only, prevents overriding all 
    // the cells from outside grid class

    constructor(gridElement) {
        // use JS to set the CSS style 
        gridElement.style.setProperty("--grid-size", GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)

        this.#cells = createCellElements(gridElement).map(
            // foreach cell inside the cells array, create a cell object, pass in coordinates 
            (cellElement, index) => {
                let x = index % GRID_SIZE
                let y = Math.floor(index / GRID_SIZE)
                return new Cell(cellElement, x, y)
            })
        console.log(this.cells)
    }

    get #emptyCells() {
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell() {
        // return a random empty cell 
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
        return this.#emptyCells[randomIndex]
    }
}
// create all the cell elements inside a grid element
function createCellElements(gridElement) {
    // initialize the array to hold individual cell elements
    const cells = []
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        // create GRID_SIZE^2 cell elements of dive,
        const cell = document.createElement("div")
        // each cell is of class cell 
        cell.classList.add("cell")
        // push the cell into the array
        cells.push(cell)
        // apprend the cell into the grid element
        gridElement.append(cell)
    }
    // return the array of cells 
    return cells;
}