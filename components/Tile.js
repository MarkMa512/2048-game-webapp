export default class Tile {
    #tileElement
    #x
    #y
    #value

    // tileContainer: Gameboard 
    // generate tile at random, with 50% of 2 or 4 each 
    constructor(tileContainer, displayValue = Math.random() > .5 ? 2 : 4) {
        this.#tileElement = document.createElement("div")
        this.#tileElement.classList.add("tile")
        tileContainer.append(this.#tileElement) // add the till elelemt to gameboard element
        this.value = displayValue
        console.log(this)
    }

    set value(v) {
        this.#value = v
        this.#tileElement.textContent = v
        const power = Math.log2(v)
        const backgroundLightness = 100 - power * 9
        this.#tileElement.style.setProperty("--backgroud-lightness", `${backgroundLightness}%`)
        // if the background is dark, use bright color 
        this.#tileElement.style.setProperty("--text-ligntness", `${backgroundLightness <= 50 ? 90 : 10}%`)
    }


    get value() {
        return this.#value
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