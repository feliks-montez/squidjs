"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./entity");
class Sprite {
    constructor(x, y, key, numcols = 1, numrows = 1, fps = 0) {
        this.velocity = { x: 0, y: 0, rot: 0 };
        this.acceleration = { x: 0, y: 0, rot: 0 };
        this.dtSum = 0;
        this.updateContinuously = true;
        this.visible = true;
        this.scale = 1;
        this.mouseinside = false;
        this.spriteData = {
            states: {
                default: [0]
            }
        };
        this.animIndex = 0;
        this.position = { x: x, y: y, rot: 0 };
        this.key = key;
        this.numcols = numcols;
        this.numrows = numrows;
        this.frame = this.spriteData.states["default"][0];
        this.fps = fps;
    }
    get ctx() {
        var _a;
        return (_a = this.layer) === null || _a === void 0 ? void 0 : _a.ctx;
    }
    get x() {
        return this.position.x;
    }
    set x(n) {
        if (n != this.position.x) {
            this.position.x = n;
            this.layer.redraw = true;
        }
    }
    get y() {
        return this.position.y;
    }
    set y(n) {
        if (n != this.position.y) {
            this.position.y = n;
            this.layer.redraw = true;
        }
    }
    get rotation() {
        return this.position.rot;
    }
    set rotation(rad) {
        if (rad != this.position.rot) {
            this.position.rot = rad;
            this.layer.redraw = true;
        }
    }
    get angle() {
        return this.position.rot * 180 / 2 / Math.PI;
    }
    set angle(ang) {
        this.position.rot = ang * 2 * Math.PI / 180;
    }
    get swidth() {
        return this.image.width / this.numcols;
    }
    get sheight() {
        return this.image.height / this.numrows;
    }
    get width() {
        return this.swidth * this.scale;
    }
    get height() {
        return this.sheight * this.scale;
    }
    get image() {
        return this.root.images[this.key];
    }
    getSRow(frame) {
        return Math.floor(frame / this.numcols);
    }
    getSCol(frame) {
        return frame % this.numcols;
    }
    get curState() {
        return "default";
    }
    pointInBounds(x, y) {
        return (x > this.x - this.width / 2 &&
            x < this.x + this.width / 2 &&
            y > this.y - this.height / 2 &&
            y < this.y + this.height / 2);
    }
    setNextFrame() {
        const frameList = this.spriteData.states[this.curState];
        this.animIndex = (this.animIndex + 1) % frameList.length;
        this.frame = frameList[this.animIndex];
        this.layer.redraw = true;
    }
    calculateFrame(dt) {
        this.dtSum = this.dtSum + dt;
        if (this.dtSum >= 1 / this.fps) {
            this.setNextFrame();
            this.dtSum = this.dtSum % 1 / this.fps;
        }
    }
    update(dt) {
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        this.position.rot += this.velocity.rot * dt;
        this.velocity.x += this.acceleration.x * dt;
        this.velocity.y += this.acceleration.y * dt;
        this.velocity.rot += this.acceleration.rot * dt;
        this.calculateFrame(dt);
    }
    preDraw() { }
    postDraw() { }
    draw() {
        var _a;
        if (this.ctx) {
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.rotation);
            this.preDraw();
            if (this.frame instanceof Array) {
                this.frame.forEach(frame => {
                    var _a;
                    this.ctx.drawImage((_a = this.root) === null || _a === void 0 ? void 0 : _a.images[this.key], this.swidth * this.getSCol(frame), this.sheight * this.getSRow(frame), this.swidth, this.sheight, -this.width / 2, -this.height / 2, this.width, this.height);
                });
            }
            else {
                this.ctx.drawImage((_a = this.root) === null || _a === void 0 ? void 0 : _a.images[this.key], this.swidth * this.getSCol(this.frame), this.sheight * this.getSRow(this.frame), this.swidth, this.sheight, -this.width / 2, -this.height / 2, this.width, this.height);
            }
            this.postDraw();
            this.ctx.restore();
        }
    }
}
exports.Sprite = Sprite;
class AnimationSprite extends Sprite {
    constructor(x, y, key, numrows, numcols, frame = 0) {
        super(x, y, key);
        this.numrows = numrows;
        this.numcols = numcols;
        this.frame = frame;
    }
}
exports.AnimationSprite = AnimationSprite;
//# sourceMappingURL=sprite.js.map