"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const layer_1 = require("./layer");
const squid_1 = require("./squid");
/**
 * @param layers an object with layer names as keys and their corresponding canvas IDs
 */
class Game {
    constructor(width, height, layers, imageUrls) {
        this.layers = {};
        this.lastTime = Date.now();
        this.images = {};
        layers.forEach((key) => {
            let canvas = document.getElementById(key);
            if (canvas) {
                this.layers[key] = new layer_1.Layer(key, canvas);
                this.layers[key].root = this;
            }
            else {
                console.log("no element found with ID: ", key);
            }
        });
        this.width = width;
        this.height = height;
        this.dims = [width, height];
        console.log("Loading images...");
        new squid_1.ImageLoader(imageUrls, ((images) => {
            this.images = images;
            this.gameLoop();
        }).bind(this));
    }
    set dims(d) {
        this.width = d[0];
        this.height = d[1];
        Object.keys(this.layers).forEach((key) => {
            let canvas = document.getElementById(this.layers[key].name);
            canvas.width = d[0];
            canvas.height = d[1];
        });
    }
    update(dt) {
        Object.keys(this.layers).forEach(key => {
            const layer = this.layers[key];
            if (layer.updateContinuously == true)
                layer.update(dt);
        });
    }
    draw() {
        Object.keys(this.layers).forEach(key => {
            const layer = this.layers[key];
            if (layer.visible == true)
                layer.draw();
        });
    }
    gameLoop() {
        let now = Date.now();
        let dt = now - this.lastTime;
        this.update(dt / 1000);
        this.draw();
        this.lastTime = now;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map