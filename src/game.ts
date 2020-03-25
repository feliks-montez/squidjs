import { Layer } from "./layer";
import { ImageLoader } from "./squid";
import { image_urls, image_dict } from "./image-loader";

/**
 * @param layers an object with layer names as keys and their corresponding canvas IDs
 */
export class Game {
    layers: {[name: string]: Layer} = {}
    lastTime = Date.now()
    images: image_dict = {}
    width: number
    height: number
    constructor(width: number, height: number, layers: string[], imageUrls: image_urls) {
        layers.forEach((key: string) => {
            let canvas = document.getElementById(key)
            if (canvas) {
                this.layers[key] = new Layer(key, canvas as HTMLCanvasElement)
                this.layers[key].root = this
            } else {
                console.log("no element found with ID: ", key)
            }
        })
        this.width = width
        this.height = height
        this.dims = [width, height]
        console.log("Loading images...")
        new ImageLoader(imageUrls, ((images: image_dict) => {
            this.images = images
            this.gameLoop()
        }).bind(this))
    }

    set dims(d: number[]) {
        this.width = d[0]
        this.height = d[1]
        Object.keys(this.layers).forEach((key: string) => {
            let canvas = document.getElementById(this.layers[key].name) as HTMLCanvasElement
            canvas.width = d[0]
            canvas.height = d[1]
        })
    }

    update(dt: number) {
        Object.keys(this.layers).forEach(key => {
            const layer = this.layers[key]
            if (layer.updateContinuously == true) layer.update(dt)
        })
    }

    draw() {
        Object.keys(this.layers).forEach(key => {
            const layer = this.layers[key]
            if (layer.visible == true) layer.draw()
        })
    }

    gameLoop() {
        let now = Date.now()
        let dt = now - this.lastTime
        this.update(dt/1000)
        this.draw()
        this.lastTime = now
        requestAnimationFrame(this.gameLoop.bind(this))
    }
}