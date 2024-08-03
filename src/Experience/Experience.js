import Sizes from './Utils/Sizes.js'
export default class Experience {
    constructor(canvas) {
        // Global Access
        window.experience = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()

        console.log(this.sizes.pixelRatio)  
    }
}