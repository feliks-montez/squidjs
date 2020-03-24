"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroVector = { x: 0, y: 0, rot: 0 };
class BoxEntity {
    constructor(position, { updateContinuously = true, visible = true, velocity = { x: 0, y: 0, rot: 0 }, acceleration = { x: 0, y: 0, rot: 0 } }, devAttrs) {
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
    update(dt, parent) {
    }
    draw() {
    }
}
exports.BoxEntity = BoxEntity;
//# sourceMappingURL=entity.js.map