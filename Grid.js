// variables to manipulate the cells 
const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid {
    constructor(gridElement) {
        // use JS to set the CSS style 
        gridElement.style.setProperty("--grid-size", GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
    }
}