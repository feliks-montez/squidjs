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
        this.canvas.onclick = (evt) => {
            if (this.onclick)
                this.onclick(evt);
            this.children.forEach(child => {
                // if (evt.offsetX > child.x-child.width/2 &&
                //     evt.offsetX < child.x+child.width/2 &&
                //     evt.offsetY > child.y-child.height/2 &&
                //     evt.offsetY < child.y+child.height/2) {
                //     if (child.onclick) child.onclick()
                // }
                if (child.onclick && child.pointInBounds(evt.offsetX, evt.offsetY))
                    child.onclick(evt);
            });
        };
        this.canvas.onmousemove = (evt) => {
            if (this.onmousemove)
                this.onmousemove(evt);
            this.children.forEach(child => {
                if (child.onmousemove && child.pointInBounds(evt.offsetX, evt.offsetY))
                    child.onmousemove(evt);
            });
        };
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
        this.children.forEach(child => {
            if (child.updateContinuously)
                child.update(dt);
        });
    }
    draw() {
        if (this.ctx) {
            this.ctx.save();
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.children.forEach(child => {
                if (child.visible)
                    child.draw();
            });
            this.ctx.restore();
        }
    }
    onclick(evt) {
        this.children.forEach(child => {
            if (child.onclick && child.pointInBounds(evt.offsetX, evt.offsetY))
                child.onclick(evt);
        });
    }
    onmousemove(evt) {
        this.children.forEach(child => {
            if (child.onmousemove && child.pointInBounds(evt.offsetX, evt.offsetY))
                child.onmousemove(evt);
            if (child.mouseinside && !child.pointInBounds(evt.offsetX, evt.offsetY)) {
                if (child.onmouseout)
                    child.onmouseout(evt);
                child.mouseinside = false;
            }
            else if (!child.mouseinside && child.pointInBounds(evt.offsetX, evt.offsetY)) {
                if (child.onmouseover)
                    child.onmouseover(evt);
                child.mouseinside = true;
            }
        });
    }
    add(obj) {
        obj.root = this.root;
        obj.ctx = this.ctx;
        this.children.push(obj);
    }
}
exports.Layer = Layer;
//# sourceMappingURL=layer.js.map