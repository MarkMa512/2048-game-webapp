export default class Tile {
    #tileElement
    #x
    #y
    #displayValue

    // tileContainer: Gameboard 
    // generate tile at random, with 50% of 2 or 4 each 
    constructor(tileContainer, displayValue = Math.random() > .5 ? 2 : 4) {
        this.#tileElement = document.createElement("div")
        this.#tileElement.classList.add("tile")
        tileContainer.append(this.#tileElement) // add the till elelemt to gameboard element
        this.value = displayValue
    }

    get displayValue() {
        return this.#displayValue
    }

    set x(xValue) {
        this.#x = xValue
        this.#tileElement.style.setProperty("--x", xValue)
    }

    set y(yValue) {
        this.#y = yValue
        this.#tileElement.style.setProperty("--y", yValue)
    }

}