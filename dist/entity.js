"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroVector = { x: 0, y: 0, rot: 0 };
class BoxEntity {
    constructor(position, w, h, { updateContinuously = true, visible = true, velocity = { x: 0, y: 0, rot: 0 }, acceleration = { x: 0, y: 0, rot: 0 } }, devAttrs) {
        this.mouseinside = false;
        this.scale = 1;
        this.width = w;
        this.height = h;
        this.updateContinuously = updateContinuously;
        this.visible = visible;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        Object.assign(this, arguments[2]);
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    pointInBounds(x, y) {
        return (x > this.x - this.width / 2 &&
            x < this.x + this.width / 2 &&
            y > this.y - this.height / 2 &&
            y < this.y + this.height / 2);
    }
    update(dt) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        this.position.rot += this.velocity.rot * dt;
        this.velocity.x += this.acceleration.x * dt;
        this.velocity.y += this.acceleration.y * dt;
        this.velocity.rot += this.acceleration.rot * dt;
    }
    draw() {
    }
}
exports.BoxEntity = BoxEntity;
//# sourceMappingURL=entity.js.map