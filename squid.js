import _ from "lodash"

/**
 * @param layers a map of layernames to HTMLCanvasElements
 */
export default class Squid {
    layers = {}
    constructor(layers) {
        layers.keys().forEach(key => {
            this.layers[key] = new Layer(layers[key])
        });
        this.layers = opts
    }

    update() {
        this.layers.values().forEach(layer => {
            if (layer.continuousUpdate == true) layer.update()
        })
    }

    draw() {

    }

    gameLoop() {
        
        requestAnimationFrame(this.gameLoop)
    }
}

export class Layer {
    constructor(canvas, continuousUpdate=true) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.ents = []
        this.continuousUpdate = continuousUpdate
    }

    update(dt) {
        this.ents.forEach(ent => {
            if (ent.continuousUpdate) ent.update(dt)
        })
    }

    draw() {
        this.ents.forEach(ent => {
            ent.draw()
        })
    }
}