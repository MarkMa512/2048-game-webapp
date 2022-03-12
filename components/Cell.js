export default class Cell {
    #cellElement
    #x
    #y
    #tile

    constructor(cellElement, x, y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y
    }

    get tile() {
        return this.#tile
    }

    // set tile(displayValue) {
    //     this.#tile = displayValue
    //     if (displayValue == null) return
    //     this.#tile.x = this.tile.#x // moving the tile from old x to new x 
    //     this.#tile.y = this.tile.#y
    //     /**
    //      * TypeError: Cannot access invalid private field (evaluating 'this.tile.#x')
    //      */
    // }

    set tile(displayValue) {
        this.#tile = displayValue
        if (displayValue == null) return
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }
}