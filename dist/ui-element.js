"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class TextButton implements UIElement {
//     ctx?: CanvasRenderingContext2D
//     updateContinuously = false
//     x: number
//     y: number
//     text: string
//     constructor(x: number, y: number, text: string) {
//         this.x = x
//         this.y = y
//         this.text = text
//     }
//     pointInBounds(x: number, y: number): boolean {
//         return (
//             x > this.x-this.width/2 &&
//             x < this.x+this.width/2 &&
//             y > this.y-this.height/2 &&
//             y < this.y+this.height/2)
//     }
//     update(dt: number) {}
//     draw() {
//     }
// }
class UIContainer {
    constructor(x, y, width, height, key) {
        this.updateContinuously = false;
        this.visible = true;
        this.scale = 1;
        // children: UIElement[] = []
        this.mouseinside = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.key = key;
    }
    pointInBounds(x, y) {
        return (x > this.x - this.width / 2 &&
            x < this.x + this.width / 2 &&
            y > this.y - this.height / 2 &&
            y < this.y + this.height / 2);
    }
    update(dt) { }
    preDraw() { }
    postDraw() { }
    draw() {
        if (this.root && this.ctx) {
            const img = this.root.images[this.key];
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.preDraw();
            this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.width, this.height);
            this.postDraw();
            this.ctx.restore();
        }
    }
}
exports.UIContainer = UIContainer;
//# sourceMappingURL=ui-element.js.map