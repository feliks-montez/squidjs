"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Layer {
    // unused, but implement Drawable
    // position = {x: 0, y: 0, rot: 0}
    // velocity = {x: 0, y: 0, rot: 0}
    // acceleration = {x: 0, y: 0, rot: 0}
    constructor(name, canvas, updateContinuously = true, visible = true) {
        this.updateContinuously = true;
        this.visible = true;
        this.children = [];
        this.name = name;
        this.canvas = canvas;
        const ctx = this.canvas.getContext('2d');
        ctx ? this.ctx = ctx : console.log("failed to get 2D context for Layer:", this.name);
        this.updateContinuously = updateContinuously;
        this.visible = visible;
        this.children = [];
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    update(dt) {
        // this.position.x += this.velocity.x * dt
        // this.position.y += this.velocity.y * dt
        // this.position.rot += this.velocity.rot * dt
        // this.velocity.x += this.acceleration.x * dt
        // this.velocity.y += this.acceleration.y * dt
        // this.velocity.rot += this.acceleration.rot * dt
        // this.children.forEach(child => {
        //     if (child.updateContinuously) child.update(dt, this)
        // })
    }
    draw() {
        // if (this.ctx) {
        //     this.ctx.save()
        //     this.ctx.rotate()
        //     this.children.forEach(child => {
        //         if (child.visible) child.draw()
        //     })
        //     this.ctx.restore()
        // }        
    }
}
exports.Layer = Layer;
//# sourceMappingURL=Layer.js.map